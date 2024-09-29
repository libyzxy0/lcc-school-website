import {
  Link
} from 'react-router-dom'
import {
  clsx
} from "clsx";

export function Footer() {
  return (
    <footer className="text-xs text-gray-500">
      <div className="mx-7 md:mx-12">
        <hr className="h-px border-0 bg-gray-200" />
      <div className="flex flex-col gap-2 py-6">
        <div
          className={clsx(
            `flex flex-col gap-6 md:flex-row md:justify-between`
          )}
          >
          <div className="flex flex-col md:gap-0 gap-2">
            <div>
              La Concepcion College • City of San Jose del Monte, Bulacan 3023 Philippines
            </div>
            <div>
              Copyright © 2024, La Concepcion College Inc.
            </div>
          </div>
          <div className="flex flex-col md:gap-0 gap-2 border-l-2 md:border-none border-[#007aff] pl-3 py-1">
            <div>
              This is not the official website of <Link className="text-[#007aff]" to="https://laconcepcioncollege.com">La Concepcion College</Link>.
            </div>
            <div>
              All of the text contents, images, videos in this website are owned by La Concepcion College Inc.
            </div>
            <div>
              This website is intended for demo. Not for sale.
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="https://www.facebook.com/laconcepcioncollege">
              LCC Facebook Page
            </Link>
            <Link to="#">YouTube</Link>
            <div className="text-[#007aff]">
              <Link to="https://libyzxy0.com">Developed & Design by libyzxy0</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
}