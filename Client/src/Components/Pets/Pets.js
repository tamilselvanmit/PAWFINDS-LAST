import React, { useEffect, useState } from "react";
import axios from "axios";
import PetsViewer from "./PetsViewer";
import "./Pets.css";

const AdoptionModal = ({ pet, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNo: '',
    livingSituation: '',
    previousExperience: '',
    familyComposition: '',
    petId: pet._id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://pawfinds-last.onrender.com/form/save', formData);
      alert('Adoption form submitted successfully!');
      onSubmit();
      onClose();
    } catch (error) {
      console.error('Error submitting adoption form:', error);
      alert('Failed to submit adoption form. Please try again.');
    }
  };

  return (
    <div className="adoption-modal-overlay">
      <div className="adoption-modal">
        <h2>Adopt {pet.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Living Situation</label>
            <textarea
              name="livingSituation"
              value={formData.livingSituation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Previous Pet Experience</label>
            <textarea
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Family Composition</label>
            <textarea
              name="familyComposition"
              value={formData.familyComposition}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="submit-btn">Submit Adoption Form</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mockPets = [
  {
    _id: '1',
    name: 'leo',
    type: 'Rabbit',
    age: '3 years',
    breed: 'Golden Retriever',
    area: 'New York',
    description: 'Friendly and energetic Golden Retriever looking for a loving home.',
    filename: 'rabbit2.png',
    image: '/src/assets/images/leo.png',
    updatedAt: new Date('2024-01-15T10:30:00Z')
  },
  {
    _id: '2',
    name: 'Lily',
    type: 'Fish',
    age: '2 years',
    breed: 'Siamese',
    area: 'San Francisco',
    description: 'Playful Siamese cat with a loving personality.',
    filename: 'fish1.png',
    image: '/src/assets/images/lily.png',
    updatedAt: new Date('2024-01-20T14:45:00Z')
  },
  {
    _id: '3',
    name: 'Lucy',
    type: 'Cat',
    age: '1 year',
    breed: 'Beagle',
    area: 'Chicago',
    description: 'Adorable Beagle puppy seeking a caring family.',
    filename: 'lucy.png',
    image: '/src/assets/images/lucy.png',
    updatedAt: new Date('2024-01-25T09:15:00Z')
  },
  {
    _id: '4',
    name: 'Luna',
    type: 'Cat',
    age: '5 years',
    breed: 'Persian',
    area: 'Miami',
    description: 'Elegant Persian cat looking for a quiet home.',
    filename: 'luna.png',
    image: '/src/assets/images/luna.png',
    updatedAt: new Date('2024-01-10T16:20:00Z')
  },
  {
    _id: '5',
    name: 'Max',
    type: 'Dog',
    age: '4 years',
    breed: 'German Shepherd',
    area: 'Seattle',
    description: 'Loyal and protective German Shepherd seeking an active family.',
    filename: 'max.png',
    image: '/src/assets/images/max.png',
    updatedAt: new Date('2024-01-30T11:00:00Z')
  },
  {
    _id: '6',
    name: 'Milo',
    type: 'Cat',
    age: '2 years',
    breed: 'Poodle',
    area: 'Los Angeles',
    description: 'Intelligent and playful Poodle looking for a fun home.',
    filename: 'milo.png',
    image: '/src/assets/images/milo.png',
    updatedAt: new Date('2024-01-05T15:45:00Z')
  },
  {
    _id: '7',
    name: 'Molly',
    type: 'Dog',
    age: '3 years',
    breed: 'Maine Coon',
    area: 'Boston',
    description: 'Majestic Maine Coon cat seeking a loving family.',
    filename: 'molly.png',
    image: '/src/assets/images/molly.png',
    updatedAt: new Date('2024-01-22T13:20:00Z')
  }
];

const Pets = () => {
  const [filter, setFilter] = useState("all");
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchRequests = async () => {
      try {
        // Uncomment the following line to fetch from backend when ready
        // const response = await fetch('https://pawfinds-last.onrender.com/approvedPets')
        // const data = await response.json()
        
        // For now, use mock data
        setPetsData(mockPets);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchRequests();
  }, [])

  const filteredPets = petsData.filter((pet) => {
    if (filter === "all") {
      return true;
    }
    return pet.type === filter;
  });

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleCloseModal = () => {
    setSelectedPet(null);
  };

  return (
    <>
      <div className="filter-selection">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
          <option value="Rabbit">Rabbits</option>
          <option value="Bird">Birds</option>
          <option value="Fish">Fishs</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="pet-container">
        {loading ?
          <p>Loading</p> : ((filteredPets.length > 0 ) ? (
            filteredPets.map((petDetail, index) => (
              <PetsViewer pet={petDetail} key={index} />
            ))
          ) : (
            <p className="oops-msg">Oops!... No pets available</p>
          )
          )
        }
      </div>
      {selectedPet && (
        <AdoptionModal 
          pet={selectedPet} 
          onClose={handleCloseModal}
          onSubmit={() => {
            // Optional: Refresh pets or show success message
          }} 
        />
      )}
    </>
  );
};

export default Pets;
