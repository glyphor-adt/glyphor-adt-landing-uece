import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: <a href="mailto:info@example.com" className="hover:text-blue-500">info@example.com</a></p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="list-none pl-0">
              <li>
                <Link to="/about" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Example Company. All rights reserved.
            </p>
            <p className="text-sm">
              Disclaimer: This website is for informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;