import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <>
      <div className="nav">
        <li>
          <Link href="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="a">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="a">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/product" className="a">
            Product
          </Link>
        </li>
      </div>
    </>
  );
}
