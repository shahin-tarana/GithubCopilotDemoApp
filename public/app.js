const artForms = [
  {
    title: 'Madhubani',
    category: 'Painting',
    region: 'Bihar',
    period: 'Ancient to contemporary',
    image:
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=900&q=80',
    summary: 'A vivid folk painting tradition from Mithila where line work, ritual symbolism, and natural pigments tell stories of life, fertility, and devotion.',
    history:
      'Madhubani painting flourished in the Mithila region and was traditionally created by women during festivals, weddings, and rituals. It was originally painted on mud walls, and today it continues as a celebrated form of Indian folk art with global recognition.'
  },
  {
    title: 'Warli',
    category: 'Tribal Art',
    region: 'Maharashtra',
    period: 'Over 2,000 years old',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    summary: 'Warli art uses simple geometric shapes to represent dance, harvest, marriage, and daily life, creating a strikingly minimal visual rhythm.',
    history:
      'Created by the Warli tribe of the western ghats, this art form uses white rice paste on mud walls to depict scenes from social and ritual life. The pared-down visual language is deeply rooted in the community’s relationship with nature, agriculture, and celebration.'
  },
  {
    title: 'Kalamkari',
    category: 'Textile Art',
    region: 'Andhra Pradesh',
    period: 'Medieval to modern',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    summary: 'A hand-painted and block-printed textile tradition that combines storytelling, temple symbolism, and natural dyeing techniques.',
    history:
      'Kalamkari evolved from the artisanal traditions of Andhra Pradesh and was historically used for temple hangings, sacred cloths, and royal textiles. The word kalam means pen, reflecting the meticulous hand-painted process that brings mythic stories to life.'
  },
  {
    title: 'Pattachitra',
    category: 'Temple Art',
    region: 'Odisha and West Bengal',
    period: 'Centuries old',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
    summary: 'Pattachitra paintings are handcrafted on cloth or palm leaves, known for their bright colour palette and devotion to Jagannath and Krishna traditions.',
    history:
      'This sacred painting tradition developed in Odisha and parts of Bengal, where scrolls and cloth panels were used in temples and ritual ceremonies. The images are highly symbolic and preserve the visual vocabulary of Vaishnava traditions through intricate outlines and natural pigments.'
  },
  {
    title: 'Tanjore Painting',
    category: 'Painting',
    region: 'Tamil Nadu',
    period: 'Chola to Maratha era',
    image:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
    summary: 'A rich, embossed form of temple painting that uses gold foil, vivid pigments, and stylised figures to create luminous devotional images.',
    history:
      'Tanjore painting emerged in Tamil Nadu and flourished under royal and temple patronage. Famous for its use of gold leaf and dense composition, it became one of the most revered styles of South Indian devotional art, especially in temple worship and palace settings.'
  },
  {
    title: 'Miniature Painting',
    category: 'Painting',
    region: 'Across northern India',
    period: 'Mughal, Rajput, and Pahari schools',
    image:
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=900&q=80',
    summary: 'Miniature paintings are intricate manuscript and portrait works where courtly elegance, Persian influence, and local emotion merge beautifully.',
    history:
      'From the Mughal courts to Rajput and Pahari kingdoms, miniature painting became a refined tradition of illustrated manuscripts and albums. These works captured royal life, mythology, poetry, and nature with extraordinary detail, turning manuscripts into treasured works of art.'
  },
  {
    title: 'Gond Art',
    category: 'Tribal Art',
    region: 'Madhya Pradesh',
    period: 'Contemporary folk revival',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    summary: 'Gond art is defined by vibrant dots, lines, and narrative scenes inspired by forests, animals, spirits, and the daily rhythm of tribal life.',
    history:
      'The Gond people of central India have long used painting as a storytelling medium, especially to document ecology, ancestry, and myths. The modern revival of Gond art has brought this visual language to galleries and homes worldwide while preserving its deep cultural roots.'
  },
  {
    title: 'Phad',
    category: 'Folk Art',
    region: 'Rajasthan',
    period: 'Traditional storytelling tradition',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    summary: 'Phad paintings are long narrative scrolls that recount local legends, heroic epics, and devotional stories through richly coloured panels.',
    history:
      'The Phad tradition is closely associated with the storytellers of Rajasthan, who carried painted cloth scrolls to narrate tales of local deities and heroes. It remains a powerful example of how art and oral tradition travel together across generations.'
  },
  {
    title: 'Patola',
    category: 'Textile Art',
    region: 'Gujarat and Rajasthan',
    period: 'Historic weaving tradition',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    summary: 'Patola is a complex double-ikat textile art form celebrated for its precise patterns, symbolic geometry, and luxurious craftsmanship.',
    history:
      'Originating in Gujarat and associated with royal and ceremonial use, Patola weaving involved laborious double ikat techniques that demanded exceptional skill. The textiles are prized for their symmetry, vibrant colours, and role in wedding traditions and cultural ceremonies.'
  },
  {
    title: 'Bagh Print',
    category: 'Textile Art',
    region: 'Madhya Pradesh',
    period: 'Traditional block printing',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    summary: 'Bagh print is a hand-block printed textile tradition known for its floral patterns, bold outlines, and earthy palette.',
    history:
      'Practised in the Bagh region of Madhya Pradesh, this art form uses hand-carved wooden blocks and natural dyes to create textiles that carry a distinct regional identity. Its history reflects the fusion of local craft knowledge and the rhythms of communal production.'
  }
];

const grid = document.getElementById('artGrid');
const filterGroup = document.getElementById('filterGroup');

function renderArtForms(selectedFilter = 'all') {
  const filtered =
    selectedFilter === 'all'
      ? artForms
      : artForms.filter((art) => art.category === selectedFilter);

  grid.innerHTML = filtered
    .map(
      (art) => `
        <article class="art-card">
          <img src="${art.image}" alt="${art.title} art form" />
          <div class="card-body">
            <div class="card-meta">
              <span>${art.region}</span>
              <span>${art.period}</span>
            </div>
            <h3>${art.title}</h3>
            <span class="card-category">${art.category}</span>
            <p class="card-summary">${art.summary}</p>
            <p class="card-history"><strong>History:</strong> ${art.history}</p>
          </div>
        </article>
      `
    )
    .join('');
}

filterGroup.addEventListener('click', (event) => {
  const button = event.target.closest('.chip');
  if (!button) return;

  const selectedFilter = button.dataset.filter;
  document.querySelectorAll('.chip').forEach((chip) => chip.classList.toggle('active', chip === button));
  renderArtForms(selectedFilter);
});

renderArtForms();
