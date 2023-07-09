import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {


  const session = null;{/*if loggin show user photo and projects, if not Auth*/}

  return (
    <nav className='navbar flexBetween'>
      <div className='flex-1 flexStart gap-20'>{/*first-div*/}
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={115}
            height={43}
            alt="Flexibble"
           />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
        </div>{/*first-div*/}
        
        <div className="flexCenter gap-4">{/*second-div*/}
          {session ? (
            <>
              UserPhoto
              <Link href="/Create-project">
                Share Work
              </Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>{/*end-second-div*/}
      
    </nav>
  )
}

export default Navbar