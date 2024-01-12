import dynamic from "next/dynamic"
import Header from "../../components/Header"
import styles from "@/styles/Home.module.scss"

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false})

export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.map__container}>
        <DynamicMap/>
      </div>
    </>
  )
}
