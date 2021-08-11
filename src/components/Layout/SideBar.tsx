import React, {useState} from 'react';

export default function SideBar() {
   const [state, setState] = useState('Hello');

   return (
      <div>
         {state}
      </div>
   )
}