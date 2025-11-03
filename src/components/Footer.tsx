import { assets } from "@/assets/mockup/assets"
import { links } from "@/constants/links.ts";
import { Link } from "react-router-dom";

type Props = {}

function Footer({ }: Props) {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-obsidianblack-primary w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, laudantium saepe accusantium maiores sequi obcaecati, quis vitae, ipsam mollitia dignissimos doloremque fugit corporis omnis possimus reiciendis facilis ea error magnam?</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            {links.map((link, index) =>
              <Link key={index} to={link.path} replace className="cursor-pointer hover:text-white transition-all">{link.name}</Link>
            )}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-80">Lastest news, articles, and resources, sent to your inbox.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="p-2 rounded bg-obsidianblack-accent-light text-gray-100 border border-obsidianblack-primary focus:outline-none w-full md:w-auto" />
            <button className="btn-main-2">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-obsidianblack-accent-light py-4 mt-10 text-center text-gray-500">
        Copyright 2024 Zaina International. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer