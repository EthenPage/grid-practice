import React from "react";
import Cards from "./Components/Cards";
import Daniel from "./Assets/images/image-daniel.jpg";
import Jonathan from "./Assets/images/image-jonathan.jpg";
import Jeanette from "./Assets/images/image-jeanette.jpg";
import Patrick from "./Assets/images/image-patrick.jpg";
import Kira from "./Assets/images/image-kira.jpg";

const App = () => {
  const data = [
    {
      pic: Daniel,
      profileName: "Daniel Clifford",
      title:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      desc: "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
    },
    {
      pic: Jonathan,
      profileName: "Jonathan Walters",
      title: "The team was very supportive and kept me motivated",
      desc: "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
    },
    {
      pic: Jeanette,
      profileName: "Jeanette Harmon",
      title: "An overall wonderful and rewarding experience",
      desc: "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
    },
    {
      pic: Patrick,
      profileName: "Patrick Abrams",
      title:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      desc: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
    },
    {
      pic: Kira,
      profileName: "Kira Whittle",
      title: "Such a life-changing experience. Highly recommended!",
      desc: "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
    },
  ];
  return (
    <>
      <main className="main">
        <section className="first-card common bg-quote">
          <Cards
            pic={data[0].pic}
            profileName={data[0].profileName}
            title={data[0].title}
            desc={data[0].desc}
          />
        </section>

        <section className="second-card common">
          <Cards
            pic={data[1].pic}
            profileName={data[1].profileName}
            title={data[1].title}
            desc={data[1].desc}
          />
        </section>

        <section className="third-card common">
          <Cards
            pic={data[2].pic}
            profileName={data[2].profileName}
            title={data[2].title}
            desc={data[2].desc}
          />
        </section>

        <section className="fourth-card common">
          <Cards
            pic={data[3].pic}
            profileName={data[3].profileName}
            title={data[3].title}
            desc={data[3].desc}
          />
        </section>

        <section className="fifth-card common">
          <Cards
            pic={data[4].pic}
            profileName={data[4].profileName}
            title={data[4].title}
            desc={data[4].desc}
          />
        </section>
      </main>
      <footer>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://www.frontendmentor.io/profile/EthenPage">
          Mirza Monirul Alam (Ethen)
        </a>
        .
      </footer>
    </>
  );
};

export default App;
