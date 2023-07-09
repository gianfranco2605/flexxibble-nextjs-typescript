import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getServerSession } from "next-auth";
import { getCurrentUser } from "@/lib/session";

// SERVERSIDE COMPONENT ALLOWS ME TO ASYNC NAV COMPONENT
const Navbar = async () => {

  const session = await getCurrentUser();{/*if loggin show user photo and projects, if not Auth*/}

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
          {session?.user ? (
            <>
             {session?.user?.image
              && (
                <Image 
                src={session.user.image}
                width={40}
                height={40}
                className="rounded-full"
                alt={session.user.name}
              />
              )}
              
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