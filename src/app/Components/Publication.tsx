import React from 'react';

const Publications = () => {
  const featuredPublications = [
    {
      date: 'Mar 10, 2025',
      title: 'Mapping the magnetoreceptive brain: A 3D digital atlas of the migratory bird Eurasian blackcap (Sylvia atricapilla)',
      journal: 'bioRxiv',
      authors: 'Nikoloz Sirmpilatze, Alessandro Felder, Dinora Abdulazhanova et al.',
      description: 'My most recent work on a new bird brain atlas',
      doi: 'https://doi.org/10.1101/2025.03.04.641293'
    },
    {
      date: 'May 24, 2022',
      title: 'Spatial signatures of anesthesia-induced burst-suppression differ between primates and rodents',
      journal: 'eLife',
      authors: 'Nikoloz Sirmpilatze et al.',
      description: 'The main publication contains out of my PhD work.',
      doi: ''
    }
  ];

  const allPublications = [
    {
      date: 'Mar 10, 2025',
      title: 'Mapping the magnetoreceptive brain: A 3D digital atlas of the migratory bird Eurasian blackcap (Sylvia atricapilla)',
      journal: 'bioRxiv',
      authors: 'Nikoloz Sirmpilatze et al.',
      citedBy: 0
    },
    {
      date: 'Sep 30, 2024',
      title: 'Activation mapping in multi-center rat sensory-evoked functional MRI datasets using a unified pipeline.',
      journal: 'bioRxiv',
      authors: 'Marie Galteau et al.',
      citedBy: 0
    },
    {
      date: 'Mar 12, 2024',
      title: 'NeuralPlayground: A Standardised Environment for Evaluating Models of Hippocampus and Entorhinal Cortex',
      journal: 'bioRxiv',
      authors: 'Clémentine Dominé et al.',
      citedBy: 0
    },
    {
      date: 'Jan 1, 2023',
      title: 'An anesthetic protocol for preserving functional imaging',
      journal: 'Neuroscience',
      authors: 'Michael Ortiz-Rios et al.',
      citedBy: 15
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured</h2>
        <div className="space-y-8">
          {featuredPublications.map((pub, index) => (
            <div key={index} className="border-b pb-6 last:border-b-0">
              <p className="text-gray-600 mb-2">{pub.date}</p>
              <h3 className="text-xl font-medium mb-1">{pub.title}</h3>
              <p className="text-gray-700 mb-2">{pub.journal}</p>
              <p className="text-gray-600 mb-2">{pub.authors}</p>
              {pub.description && <p className="text-gray-700 mb-2 italic">{pub.description}</p>}
              {pub.doi && (
                <a 
                  href={pub.doi} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {pub.doi}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">All</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Journal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Authors</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cited by</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allPublications.map((pub, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{pub.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.journal}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{pub.authors}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.citedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Publications;