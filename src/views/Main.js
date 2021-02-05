import {Navbar} from '../components/Navbar';
import {Hero} from '../components/Hero';
import {Body} from '../components/Body';
import {Footer} from '../components/Footer'



export function Main({ navbar, hero, body,footer }){
	return <main>
    <Navbar {...navbar} />
    <Hero {...hero} />
    <Body {...body} />
    <Footer {...footer} />
		</main>
	}