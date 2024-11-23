import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MediInfoSection from './components/MediInfoSection'
import Footer from './components/Footer'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import LoadingComponent from './components/LoadingComponent'
import OurBlogsHeading from './components/OurBlogsHeading'

const IngredientsSection = lazy(()=> import('./components/IngredientsSection'))

const OurBlogsSection = lazy(()=> import('./components/OurBlogsSection'))

function App() {

    const [ showIngredientsSection, setShowIngredientsSection ] = useState(false);
    const [ showOurBlogsSection, setShowOurBlogsSection ] = useState(false);

    const ingredientsSectionElement = useRef<HTMLElement>(null);
    const ourBlogsSectionElement = useRef<HTMLElement>(null);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach( entry =>{
                if(ingredientsSectionElement.current == entry.target && entry.isIntersecting){
                    setShowIngredientsSection(true);
                }
                if(ourBlogsSectionElement.current == entry.target && entry.isIntersecting){
                    setShowOurBlogsSection(true);
                }
            })
        })

        observer.observe(ingredientsSectionElement.current!);
        observer.observe(ourBlogsSectionElement.current!);

    },[])

    const reloadWindow = () =>{

        window.location.reload();
    }

    return (
        <>
            <main className=''>
                <header>
                    <Header />
                </header>
                <section className=' mt-5 pb-64 bg-[#e2f5fb]'>
                    <Hero />
                </section>
                <section className=' -translate-y-56'>
                    <MediInfoSection />
                </section>
                <section ref={ingredientsSectionElement} className=' -mt-36 my-container'>
                    {
                        showIngredientsSection && (
                            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reloadWindow}>
                                <Suspense fallback={<LoadingComponent />}>
                                    <IngredientsSection />
                                </Suspense>
                            </ErrorBoundary>
                        )
                    }
                </section>
                <section className=' mt-16'>
                    <OurBlogsHeading />
                </section>
                <section ref={ourBlogsSectionElement} className=' mt-10 min-h-scrreen my-container'>
                    {
                        showOurBlogsSection && (
                            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reloadWindow}>
                                <Suspense fallback={<LoadingComponent />}>
                                    <OurBlogsSection />
                                </Suspense>
                            </ErrorBoundary>
                        )
                    }
                </section>
                <footer className=' py-10 mt-20 green-bg text-white w-full'>
                    <Footer />
                </footer>
            </main>
        </>
    )
}

export default App
