import Header from '@/components/Header'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">About AussieGP</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="prose prose-lg max-w-none">
          <h2>Welcome to AussieGP</h2>
          <p>
            AussieGP is your premier destination for comprehensive coverage of the Australian Grand Prix and Formula 1 racing. 
            Our mission is to provide fans with in-depth analysis, latest news, and engaging video content about the sport they love.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li><strong>Video Coverage:</strong> Highlights, analysis, and exclusive interviews</li>
            <li><strong>In-Depth Articles:</strong> Technical analysis and historical insights</li>
            <li><strong>Race Updates:</strong> Latest news and developments from the F1 world</li>
            <li><strong>Expert Commentary:</strong> Insights from motorsport professionals</li>
          </ul>

          <h2>Our Team</h2>
          <p>
            Founded by passionate F1 enthusiasts, AussieGP brings together writers, analysts, and content creators 
            dedicated to bringing you the best Australian Grand Prix and Formula 1 coverage.
          </p>

          <h2>Contact Us</h2>
          <p>Have questions or suggestions? We'd love to hear from you!</p>
          <p className="mt-4">
            <a href="mailto:contact@aussiepg.com" className="text-red-600 hover:text-red-700 font-semibold">
              contact@aussiepg.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
