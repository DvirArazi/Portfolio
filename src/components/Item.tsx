import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Item(props: {
  url: string,
  icon: string,
  iconWidth: number,
  iconHeight?: number,
  title: string,
  description?: string,
  yOffset?: number,
  center?: boolean,
  paddingSide?: number,
}) {
  const {
    url,
    icon,
    title, 
    description,
    yOffset,
    iconWidth,
    iconHeight,
    center,
    paddingSide,
  } = props;

  return <a
    href={url}
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className} style={{
      display: `flex`,
      justifyContent: center ? `center`: ``,
      padding: `0 ${paddingSide}px`,
    }}>
      <span style={{display: `inline-block`, transform: `translateY(${yOffset}px)` }}>
        <Image src={icon} width={iconWidth} height={iconHeight ?? iconWidth} alt={''} className={styles.imager} />
      </span>
      <span style={{ paddingRight: `5px` }} />
      <span className={styles.inner} style={{
        verticalAlign: `top`,
      }}>{title}</span>
      <div/>
    </h2>
    {description === null ? <></> : <p className={inter.className}>{description}</p>}
  </a>;
}

//A web app for playing an original chess variant online and over the board