import React from 'react';
import style from './home.module.css';

export default function Home() {
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
               (<span className={style.logText}>'>>>> About me:'</span>);
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
               (<span className={style.logText}>'>>>> My story:'</span>);
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
               // So, then my parents bought me a new laptop. {`\n`}
               // And I learned new features for me as a computer engineer.{`\n`}
               //
            </code>
         </pre>
      </div>
   )
}