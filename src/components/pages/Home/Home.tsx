import React, {useState} from 'react';
import Expand from "react-expand-animated";
import style from './home.module.css';

export default function Home() {
   const [expand, setExpand] = useState(false);

   return (
      <div className={style.container}>
         <pre>
            <code>
               <p className={style.home}>{`<`}<span className={style.green}>Home</span>{`/>`}</p>
               <p>
                  <span className={style.var}>let</span>
                  <span className={style.blue}> akbar</span> = <span className={style.blue}>new </span>
                  <span className={style.green}>Programmer</span>();
               </p>
            </code>
         </pre>
         <code>
            <p>
               <span className={style.blue}>console</span>.<span className={style.yellow}>log</span>
               (<span className={style.logText}>'{`>>>>`} About me:'</span>);
            </p>
         </code>
         <pre>
            <code className={style.info}>
               // Hi there! 👋. Welcome to my portfolio.{`\n`}
               // My name is Akbarjon Mukhammatjanov.{`\n`}
               // I am From Uzbekistan (Central Asia).{`\n`}
               // I have bachelor degree📚 and graduated Inha University in Tashkent.{`\n`}
               // So, I am software engineer 👨‍💻 who loves frontend development.{`\n`}
               // I like to work mainly with ReactJs🥰 and React Native.{`\n`}
               // I have 2 years of experience in frontend development.{`\n`}
               // Have a strong foundation in JS, front-end development and UIUX💻.{`\n`}
               // Also interested in IoT and Artificial Inteligence✨.{`\n`}
               // PS: I do love❤️ listening to a music while coding, it makes me go deep in.{`\n`}
            </code>
         </pre>
         <code>
            <p>
               <span className={style.blue}>console</span>.<span className={style.yellow}>log</span>
               (<span className={style.logText}>'{`>>>>`} My story:'</span>);
            </p>
         </code>
         <pre>
            <code className={style.info}>
               // Everyone has a story in their life so do I 🙈.{`\n`}
               // Mine is interesting (at least for me 😏), I did not fail too many but...{`\n`}
               // ---- Here is my story ----{`\n`}
               // {`\n`}
               // As a kid, I loved technology and innovation like everyone else.{`\n`}
               // I had an old computer when I studied at school and. {`\n`}
               // It used to break often and everytime I had to bring it to repairer.{`\n`}
               // So, once I decided to repair it myself and one day. {`\n`}
               // I installed a Windows to my old computer and from that point I went deeper into technology. {`\n`}
               // Since that time I have been repairing my friends laptops as well😀. {`\n`}
               <Expand open={expand}>
                  // So, then my parents bought me a new laptop. {`\n`}
                  // And I learned new features for me as a computer engineer.{`\n`}
                  //
               </Expand>
            </code>
         </pre>
         <code onClick={() => setExpand(!expand)} className={style.readMore}>
            <p>
               <span className={style.blue}>{expand ? 'readLess' : 'readMore'}</span>();
            </p>
         </code>
         <code>
            <p>
               <span className={style.blue}>console</span>.<span className={style.yellow}>log</span>
               (<span className={style.logText}>'{`>>>>`} Who am I really?'</span>);
            </p>
         </code>
         <pre>
            <code>
               <p><span className={style.blue}>akbar</span>.<span className={style.blue}>yearsOfExperience</span> =
               <span className={style.green}> 2</span>;</p>
               <p>
                  <span className={style.blue}>akbar</span>.<span className={style.blue}>technichalSkills</span> =
               <span> [
                  <span className={style.logText}>"js"</span>,
                  <span className={style.logText}> "react"</span>,
                  <span className={style.logText}> "react-native"</span>,
                  <span className={style.logText}> "redux"</span>
                  ]</span>;
               </p>
               <p>
                  <span className={style.blue}>akbar</span>.<span className={style.blue}>designSkills</span> =
                  <span> [
                  <span className={style.logText}>"html"</span>,
                  <span className={style.logText}> "css"</span>,
                  <span className={style.logText}> "material-ui"</span>,
                  <span className={style.logText}> "bootstrap"</span>,
                  <span className={style.logText}> "materialize-css"</span>
                  ]</span>;
               </p>
               <p>
                  <span className={style.blue}>akbar</span>.<span className={style.blue}>personalSkills</span> = [
                  <p className={style.logText}>{`\xa0\xa0`}"technical communication"<span
                     className={style.white}>,</span></p>
                  <p className={style.logText}>{`\xa0\xa0`}"willingness to learn"<span className={style.white}>,</span></p>
                  <p className={style.logText}>{`\xa0\xa0`}"team working"<span className={style.white}>,</span></p>
                  <p className={style.logText}>{`\xa0\xa0`}"problem solving"<span className={style.white}>,</span></p>
                  <p className={style.logText}>{`\xa0\xa0`}"creativity"</p>
                  ]; <span className={style.info}>// just a few</span>
               </p>
            </code>
         </pre>
      </div>
   )
}