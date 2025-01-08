import React from 'react';
import { MessageSquare, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2F33] border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-6 w-6 text-[#5865F2]" />
              <span className="text-xl font-bold text-white">Digital Marketing Hub</span>
            </div>
            <p className="text-gray-400">
              Connecting digital marketing communities across MENA region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#5865F2]">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5865F2]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5865F2]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#5865F2]">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-[#5865F2]">Support Center</a></li>
              <li><a href="#" className="hover:text-[#5865F2]">Safety Center</a></li>
              <li><a href="#" className="hover:text-[#5865F2]">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#5865F2]">About Us</a></li>
              <li><a href="#" className="hover:text-[#5865F2]">Careers</a></li>
              <li><a href="#" className="hover:text-[#5865F2]">Brand Center</a></li>
              <li><a href="#" className="hover:text-[#5865F2]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#5865F2]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#5865F2]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#5865F2]">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Digital Marketing Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}