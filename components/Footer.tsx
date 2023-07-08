import { footerLinks } from '@/constants';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// typescript
type ColumnProps = {
  title: string;
  links: Array<string>
}
// FooterColumn component
const FooterColumn = ({ title, links }:ColumnProps) => (
  <div className='footer_column'>
    <h4 className='font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {/* constans */}
      {links.map((link) => 
        <Link href="/" key={link}>{link}</Link>
      )}
    </ul>
  </div>
  
)


const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>{/*start-first-div*/}
        <div className='flex items-start flex-col'>{/*start-second-div*/}
          <Image 
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt='Flexibble'
          />
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>Flexibble is the world's leading community for creatives to share, grow, and get hire.</p>
        </div>{/*end-second-div*/}
        <div className='flex flex-wrap gap-12 '>{/*start-3-div*/}
          {/* footer link projects */}
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>

          <div className='flex-1 flex flex-col gap-4'>
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>
          </div>

          <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}/>

          <div className='flex-1 flex flex-col gap-4'>
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}/>
            <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}/>
          </div>

          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links}/>

        </div>{/*end-3-div*/}
      </div>{/*end-first-div*/}
      
      {/* copyright div */}
      <div className='flexBetween footer_copyright'>
        <p>@2023 Flexibble. All right reserved</p>
        <p className='text-gray'>
          <span className='text-black font-semibold'>10,214</span> projects submitted
        </p>
      </div>
    </footer>
  )
}

export default Footer