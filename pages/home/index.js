import AppLayout from "components/AppLayout"
import { useEffect, useState } from "react"
import Devit from "components/Devit"
import Topbar from "components/Topbar"
import useUser from "hooks/useUser"
import { fetchLatestDevits } from "firebase/client"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline)
  }, user)

  return (
    <>
      <AppLayout>
        <Topbar>
          <h2>Inicio</h2>
        </Topbar>
        <section>
          {timeline.map(({ id, userName, avatar, content }) => (
            <Devit
              avatar={avatar}
              id={id}
              key={id}
              content={content}
              username={userName}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  )
}
