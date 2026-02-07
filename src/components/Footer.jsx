import VolunteerWithUsCard from "./VolunteerWithUsCard";
import { Heart, Instagram, Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] flex flex-col items-center w-full py-14 px-10">

      <div id="footer-wrapper" className="md:max-w-[1200px]  text-white w-full flex flex-col items-center gap-8 mt-12">
        <VolunteerWithUsCard />
        <div id="line" className="w-50 md:w-[60%] h-[2px] rounded-2xl bg-white md:mt-8"></div>

          <div id="footer-container" className="md:flex md:justify-between w-full md:mt-8">

            <div id="footer-logo">
              <div className="max-w-7xl mx-auto px-6 md:px-0 text-center flex flex-col items-center md:items-start gap-2 mb-12 md:mb-0">
                <img src="/public/logo 2.svg" className="" alt="" />
                <p className="text-[10px] mb-4 md:text-start">&copy; {new Date().getFullYear()} All rights reserved.</p>
                <p className="text-[12px] md:text-start md:w-[500px] md:text-[14px]">Feed The Heart Foundation is a humanitarian non-governmental organization committed to restoring hope and dignity to vulnerable individuals and communities</p>
                <button className="bg-[var(--color-secondary)] flex text-[var(--color-primary)] text-[1rem] font-bold px-4 py-2 rounded-md gap-3 cursor-pointer mt-4"> Donate Now <Heart color="blue"/></button>
              </div>
            </div>
        



          
            <div id="links" className="flex flex-col gap-8 items-center md:items-end">
              <div id="nav-links" className="flex flex-col md:items-end">
                <h4 className="text-center font-bold text-[18px]">Quick Links</h4>
                <ul className="flex items-center gap-4 text-[14px] md:flex-col md:gap-2 md:items-end mt-2">
                <li className=" opacity-50 hover:opacity-100"><a href="/">Home</a></li>
                <li className=" opacity-50 hover:opacity-100"><a href="/about">About Us</a></li>
                <li className=" opacity-50 hover:opacity-100"><a href="/gallery">Gallery</a></li>
                <li className=" opacity-50 hover:opacity-100"><a href="/contact">Contact Us</a></li>
              </ul>
              </div>

              <div id="social-links" className="flex flex-col items-center md:items-end">
                <h4 className="text-center font-bold text-[18px]">Connect with Us</h4>
                <ul className="flex items-center gap-6 text-[14px] mt-2">
                  <li className="hover:text-[var(--color-secondary)]"><a href="#"><Facebook /></a></li>
                  <li className="hover:text-[var(--color-secondary)]"><a href="https://www.instagram.com/feed_the_heart_foundation/" target="blank"><Instagram /></a></li>
                  <li className="hover:text-[var(--color-secondary)]"><a href="#"><Linkedin /></a></li>
                </ul>
              </div>
              
            </div>
          
        </div>
      </div>
    </footer>
  )
}