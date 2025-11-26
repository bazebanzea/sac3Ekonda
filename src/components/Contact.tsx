import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitMessage('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contactez-Nous</h2>
          <p className="text-xl text-gray-700">
            Vous souhaitez en savoir plus sur nos projets ou nous soutenir ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
            <a
              href="mailto:bienvenueboswa@gmail.com"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              bienvenueboswa@gmail.com
            </a>
          </div>

          <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Téléphone</h3>
            <a
              href="tel:+243811353861"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              +243 811 353 861
            </a>
          </div>

          <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Localisation</h3>
            <p className="text-gray-700">
              Territoire de Bikoro<br />
              Province de l'Équateur<br />
              République Démocratique du Congo
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Envoyez-nous un message
          </h3>

          {submitMessage && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
