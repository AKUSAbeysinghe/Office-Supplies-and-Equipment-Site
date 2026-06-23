-- =============================================
-- OFFICE STUFF DATABASE - Full Setup
-- =============================================

-- Create Database
CREATE DATABASE IF NOT EXISTS officestuff_db 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

-- Use the database
USE officestuff_db;

-- =============================================
-- 1. Categories Table
-- =============================================
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- 2. Subcategories Table
-- =============================================
CREATE TABLE IF NOT EXISTS subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE KEY unique_subcategory_slug (slug)
);

-- =============================================
-- 3. Products Table
-- =============================================
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    sub_category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    popular BOOLEAN DEFAULT FALSE,
    stock INT DEFAULT 0,
    status ENUM('active','inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_category_id) REFERENCES subcategories(id) ON DELETE CASCADE
);

-- =============================================
-- 4. Users Table
-- =============================================
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- INSERT Categories
-- =============================================
INSERT INTO categories (name, slug, description) VALUES
('Furniture', 'furniture', 'Office furniture solutions'),
('Tech', 'tech', 'Technology and electronics for office use'),
('Writing', 'writing', 'Writing instruments and stationery supplies')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug),
    description = VALUES(description);

-- =============================================
-- INSERT Subcategories
-- =============================================
INSERT INTO subcategories (category_id, name, slug, description) VALUES
-- Furniture
(1, 'Office Chairs', 'office-chairs', 'Executive Chairs - Ergonomic Chairs - Task Chairs'),
(1, 'Office Desks', 'office-desks', 'Executive Desks - Computer Desks - Standing Desks'),
(1, 'Storage & Filing', 'storage-filing', 'Filing Cabinets - Bookcases - Storage Cabinets'),
(1, 'Conference & Meeting Furniture', 'conference-meeting', 'Conference Tables - Meeting Chairs - Training Tables'),
(1, 'Reception & Lounge Furniture', 'reception-lounge', 'Reception Desks - Waiting Area Chairs - Sofas & Coffee Tables'),

-- Tech
(2, 'Computers & Laptops', 'computers-laptops', 'Desktop Computers - Laptops - Mini PCs - Workstations'),
(2, 'Printers & Scanners', 'printers-scanners', 'Inkjet Printers - Laser Printers - All-in-One Printers'),
(2, 'Communication Devices', 'communication-devices', 'IP Phones - Conference Phones - Headsets - Webcams'),
(2, 'Networking Equipment', 'networking-equipment', 'Routers - Switches - Access Points - Network Cables'),
(2, 'Office Accessories & Peripherals', 'office-accessories', 'Monitors - Keyboards - Mice - External Storage - UPS & Power Solutions'),

-- Writing
(3, 'Pens & Pencils', 'pens-pencils', 'Ballpoint Pens - Gel Pens - Fountain Pens - Mechanical Pencils - Highlighters'),
(3, 'Notebooks & Paper', 'notebooks-paper', 'Notebooks - Writing Pads - Printer Paper - Sticky Notes - Diaries'),
(3, 'Drawing & Marking Tools', 'drawing-marking', 'Markers - Whiteboard Markers - Rulers - Erasers - Sharpeners'),
(3, 'Office Stationery', 'office-stationery', 'Staplers - Paper Clips - Binder Clips - Punches - Tape Dispensers'),
(3, 'Creative & Presentation Supplies', 'creative-presentation', 'Colored Pens - Sketchbooks - Presentation Boards - Flip Charts - Correction Supplies')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug),
    description = VALUES(description);

-- =============================================
-- Optional: Create Indexes for better performance
-- =============================================
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_subcategory ON products(sub_category_id);
CREATE INDEX idx_products_popular ON products(popular);
CREATE INDEX idx_subcategories_category ON subcategories(category_id);