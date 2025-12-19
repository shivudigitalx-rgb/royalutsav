/*
  # Add missing tables for Royal Utsav Events

  1. New Tables
    - `contact_inquiries` - For general contact form submissions
    - `events` - For upcoming and past events display

  2. Security
    - Enable RLS on all tables
    - Add appropriate access policies
*/

-- Contact Inquiries Table (if not exists)
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries FOR INSERT
  TO anon
  WITH CHECK (true);

-- Events Table (if not exists)
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date date NOT NULL,
  location text NOT NULL,
  image_url text DEFAULT '',
  is_upcoming boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  TO anon
  USING (true);

-- Insert sample upcoming events
INSERT INTO events (title, description, event_date, location, is_upcoming) VALUES
('Grand Wedding Expo 2024', 'Join us at the biggest wedding exhibition featuring the latest trends, vendors, and exclusive packages.', '2024-02-15', 'Grand Plaza Convention Center', true),
('Corporate Excellence Awards', 'Annual awards ceremony celebrating excellence in business and innovation.', '2024-03-20', 'Royal Ballroom Hotel', true),
('Spring Festival Celebration', 'A vibrant celebration of colors, culture, and community spirit.', '2024-03-25', 'City Central Park', true)
ON CONFLICT (id) DO NOTHING;