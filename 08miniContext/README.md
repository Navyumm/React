# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# PropDrilling 
* phle humko data ek jagh dursi jgh use krne ke liye uske sbhi components me data bhejna pdhta tha 
* toh iska solution golbal file me voh variable declare karke nikalaa gya 
* toh issi process ko PropDrilling kahte hai

iske liye hai # Context API hai
* ab ye problem bss react ki nhi hai toh iske jaise or bhi kayi library hai 
* jaise ki Redux

 ** toh Redux ka kaam ye hai jo data paas hpo rha hai usko manage tarike se pass karna 
 * ab Redux ke kayi version hai 
 * react me hai react-Redux 
* iska ek or easier version market me hai, jiska naam hai
* Redux-toolkit (RTK)


- ab iski taraf aur bhi hai jo state-management ke liye hai, jaise kayi
* zustand


-----------------------------------------------------

* ab isko use karne ke liye hum sbse phle src me ek folder bnayenge Context ke naam setup
* aur udhr file bna kar usmai React.createContext() import kar lenge react se aur isai fir variable me daal kar export kar denge

* ab context jo hai vo ek provider hota hai