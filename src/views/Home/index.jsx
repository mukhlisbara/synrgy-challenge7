import Jumbotrom from './jumbotron';
import Services from './services';
import Whyus from './whyus';
import Testimonial from './testimonial';
import Cta from './cta';
import Faq from './faq';
import Footer from './footer';

export default function Home() {
    return (
        <>
            <Jumbotrom />
            <Services />
            <Whyus />
            <Testimonial />
            <Cta />
            <Faq />
            <Footer />
        </>
    );
}
