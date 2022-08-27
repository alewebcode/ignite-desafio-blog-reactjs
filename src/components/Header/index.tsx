import { render } from "@testing-library/react";
import styles from './header.module.scss';
import Link from "next/link";

export default function Header() {
  // TODO
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
          <Link href="/"><img src="/images/Logo.svg" alt="logo"/></Link>
      </div>
    </header>
  )
}
