import { NextRequest } from 'next/server';

// Simple static hackathon data; in real usage replace with DB fetch.
const hackathons: Record<string, any> = {
  aarvam25: {
    slug: 'aarvam25',
    name: "AARVAM '25 Designathon",
    tagline: 'Curiosity → Connection → Creation',
    description: "Karur's premier 24‑hour student design challenge with mentorship, competition, and real‑world opportunities.",
    location: 'Karur',
    pricePerHeadINR: 750,
    teamSize: 5,
    enrolledTeams: 130,
    registrationWindowDaysLeft: 16,
    progressPct: 75,
    heroImages: [
      'https://res.cloudinary.com/ddpbtvesl/image/upload/v1753504465/IMG_1931_tvasqn.jpg',
      'https://res.cloudinary.com/ddpbtvesl/image/upload/v1755271847/igm_areiqx.jpg'
    ],
    smallCardImage: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1755271847/igm_areiqx.jpg',
    schedule: [
      { label: 'Bootcamp', date: '2025-11-08', endDate: '2025-11-12' },
      { label: 'Problem Statements Release', date: '2025-11-15' },
      { label: 'Hack Start', date: '2025-11-17' },
      { label: 'Hack End', date: '2025-11-18' }
    ],
    mentors: [
      { name: 'Nishok S', role: 'CMO of Nipk Technology', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894038/Rectangle_1127_fbaiyd.png' },
      { name: 'Prashanth M', role: 'CEO of Nipk Technology', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894103/Rectangle_1128_nrf78r.png' },
      { name: 'Dinesh M', role: 'Full Stack developer', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894038/Rectangle_1129_zeru9b.png' },
      { name: 'Shyam Prasath S', role: 'Graphical Designer', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894039/Rectangle_1130_swqq9i.png' },
      { name: 'Nitheesh kumar S', role: '3D generalist', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894039/Rectangle_1131_tpuunt.png' },
      { name: 'Aravind', role: 'CEO of Sequonce', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894039/Rectangle_1132_vddjaj.png' }
    ],
    judges: [
      { name: 'Naveen Kumar', role: 'SDE II', image: 'https://res.cloudinary.com/demo/image/upload/sample.jpg' },
      { name: 'Ajith Selvaraju', role: 'Founder & CEO N Kisi', image: 'https://res.cloudinary.com/demo/image/upload/sample.jpg' },
      { name: 'Dr. M. Ramkumar', role: 'HOD-CSEB, KIOT', image: 'https://res.cloudinary.com/demo/image/upload/sample.jpg' },
      { name: 'A. Sekar', role: 'Head - Incubation, KIOT', image: 'https://res.cloudinary.com/demo/image/upload/sample.jpg' },
      { name: 'Saravanan', role: 'Human Resource', image: 'https://res.cloudinary.com/demo/image/upload/sample.jpg' }
    ],
    // Registration handled internally; no external URL needed
    registrationUrl: '#',
  }
};

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Next.js 15 dynamic params may be a Promise
  const data = hackathons[slug.toLowerCase()];
  if (!data) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
