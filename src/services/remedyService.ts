
// Ayurvedic health conditions and remedies database
export type RemedyData = {
  id: string;
  condition: string;
  symptoms: string[];
  description: string;
  remedies: {
    title: string;
    ingredients: string[];
    preparation: string;
    usage: string;
    notes: string;
  }[];
  lifestyle: string[];
  prevention: string[];
  disclaimer: string;
};

export type ConditionMatchResult = {
  matchPercentage: number;
  remedyData: RemedyData;
};

const remediesDatabase: RemedyData[] = [
  {
    id: "common-cold",
    condition: "Common Cold",
    symptoms: ["runny nose", "congestion", "sneezing", "sore throat", "cough", "mild fever", "headache"],
    description: "According to Ayurveda, the common cold (Pratishyaya) is primarily a Kapha imbalance, often triggered by exposure to cold, damp conditions or seasonal changes.",
    remedies: [
      {
        title: "Tulsi and Ginger Tea",
        ingredients: ["5-6 fresh tulsi (holy basil) leaves", "1-inch fresh ginger", "1 tsp honey", "½ lemon (optional)", "1 cup water"],
        preparation: "Crush tulsi leaves and grate ginger. Boil in water for 5 minutes. Strain and add honey and lemon juice when it cools slightly.",
        usage: "Drink warm 2-3 times daily until symptoms subside.",
        notes: "Tulsi has antimicrobial properties while ginger alleviates congestion and relieves throat irritation."
      },
      {
        title: "Turmeric Milk (Golden Milk)",
        ingredients: ["1 cup milk (dairy or plant-based)", "½ tsp turmeric powder", "¼ tsp black pepper powder", "1 tsp ghee", "1 tsp honey (optional)"],
        preparation: "Heat milk with turmeric, black pepper, and ghee. Simmer for 5 minutes on low heat. Add honey after removing from heat.",
        usage: "Drink warm before bedtime.",
        notes: "Turmeric is anti-inflammatory, while black pepper enhances its bioavailability."
      }
    ],
    lifestyle: [
      "Rest adequately and avoid physical exertion",
      "Keep warm and avoid exposure to cold drafts or rain",
      "Gargle with warm saltwater for sore throat relief",
      "Stay hydrated with warm water throughout the day",
      "Avoid cold food and beverages"
    ],
    prevention: [
      "Practice Nasya (putting a few drops of warm sesame oil in each nostril) during seasonal changes",
      "Maintain regular sleep patterns",
      "Practice pranayama (breathing exercises) to strengthen respiratory system",
      "Boost immunity with daily consumption of Chyawanprash"
    ],
    disclaimer: "These remedies are traditional Ayurvedic approaches and not meant to replace professional medical advice. Consult a healthcare provider for persistent or severe symptoms."
  },
  {
    id: "indigestion",
    condition: "Indigestion (Ajirna)",
    symptoms: ["bloating", "gas", "abdominal discomfort", "stomach pain", "acid reflux", "belching", "nausea", "poor appetite"],
    description: "In Ayurveda, indigestion (Ajirna) results from impaired digestive fire (Agni) and can manifest differently depending on which dosha is imbalanced. It's often caused by irregular eating habits, consuming incompatible food combinations, or emotional stress.",
    remedies: [
      {
        title: "Digestive Spice Mix (Trikatu)",
        ingredients: ["1 part ginger powder", "1 part black pepper", "1 part long pepper (pippali)", "Honey (optional)"],
        preparation: "Mix equal quantities of all three powders. Store in an airtight container.",
        usage: "Take ¼ teaspoon with a little honey or warm water before meals.",
        notes: "This traditional formula enhances digestive fire and helps absorb gas and toxins in the GI tract."
      },
      {
        title: "Cumin, Coriander and Fennel Tea",
        ingredients: ["½ tsp cumin seeds", "½ tsp coriander seeds", "½ tsp fennel seeds", "1 cup water"],
        preparation: "Lightly crush the seeds. Boil in water for 5 minutes. Strain before drinking.",
        usage: "Drink after meals to aid digestion or whenever experiencing bloating or gas.",
        notes: "This gentle digestive tea helps relieve gas, bloating, and stimulates proper digestion."
      }
    ],
    lifestyle: [
      "Eat in a calm environment without distractions",
      "Avoid eating when emotionally upset",
      "Chew food thoroughly and eat at a moderate pace",
      "Don't drink ice-cold beverages with meals",
      "Take a short walk after meals to aid digestion",
      "Wait until one meal is digested before eating the next"
    ],
    prevention: [
      "Maintain regular mealtimes",
      "Avoid overeating and excessive fasting",
      "Limit heavy, fried, and processed foods",
      "Include bitter and pungent tastes in your diet occasionally to stimulate digestion",
      "Practice mindful eating"
    ],
    disclaimer: "These remedies address mild indigestion. Persistent or severe digestive issues should be evaluated by a healthcare professional."
  },
  {
    id: "headache",
    condition: "Headache (Shiroroga)",
    symptoms: ["head pain", "pressure in head", "throbbing sensation", "sensitivity to light", "sensitivity to sound", "neck stiffness", "eye strain"],
    description: "Ayurveda recognizes various types of headaches based on dosha imbalances: Vata headaches (typically sharp and around temples), Pitta headaches (burning sensation, often worsened by heat), and Kapha headaches (dull, heavy feeling with congestion).",
    remedies: [
      {
        title: "Brahmi and Ashwagandha Tea",
        ingredients: ["1 tsp dried brahmi leaves", "½ tsp ashwagandha powder", "1 cup water", "A pinch of cardamom (optional)", "Honey to taste (optional)"],
        preparation: "Boil brahmi and ashwagandha in water for 5-7 minutes. Add cardamom if using. Strain and add honey if desired when slightly cooled.",
        usage: "Drink when experiencing a headache or regularly to prevent recurring headaches.",
        notes: "Brahmi calms the nervous system while ashwagandha helps with stress-induced headaches."
      },
      {
        title: "Cooling Herbal Paste",
        ingredients: ["1 tbsp sandalwood powder", "½ tsp rose water", "A few drops of coconut oil", "½ tsp ground coriander seeds (optional)"],
        preparation: "Mix ingredients to form a smooth paste.",
        usage: "Apply to forehead and temples when experiencing a headache, especially for heat-related or Pitta-type headaches.",
        notes: "Provides cooling relief and can be particularly effective for headaches worsened by heat."
      }
    ],
    lifestyle: [
      "Practice regular Nasya (nasal oil administration) with brahmi or sesame oil",
      "Apply warm sesame oil to the scalp and gently massage (for Vata headaches)",
      "Protect yourself from excessive sun exposure (for Pitta headaches)",
      "Maintain regular sleep patterns",
      "Practice yoga positions that relieve tension in neck and shoulders",
      "Shirodhara (gentle pouring of warm oil on forehead) can be beneficial for chronic headaches"
    ],
    prevention: [
      "Practice Pranayama (breathing exercises) daily, especially Nadi Shodhana (alternate nostril breathing)",
      "Avoid known trigger foods",
      "Stay hydrated throughout the day",
      "Practice stress-reduction techniques like meditation",
      "Maintain proper posture, especially when working at a desk",
      "Get regular eye check-ups if headaches are related to eye strain"
    ],
    disclaimer: "Consult a healthcare professional for severe, sudden, or persistent headaches, especially if accompanied by other neurological symptoms."
  },
  {
    id: "insomnia",
    condition: "Insomnia (Anidra)",
    symptoms: ["difficulty falling asleep", "waking up during the night", "early morning awakening", "feeling unrefreshed after sleep", "daytime fatigue", "irritability", "anxiety about sleep"],
    description: "Ayurveda views insomnia (Anidra) primarily as a Vata imbalance, characterized by an overactive mind and nervous system. However, Pitta imbalance can cause fiery, intense thoughts preventing sleep, while Kapha imbalance may cause heavy but non-restful sleep.",
    remedies: [
      {
        title: "Calming Milk Decoction",
        ingredients: ["1 cup milk (dairy or plant-based)", "¼ tsp nutmeg powder", "¼ tsp cardamom powder", "A pinch of saffron strands", "1 tsp ghee", "1 tsp honey (optional)"],
        preparation: "Heat milk with spices and ghee. Simmer on low heat for 5-7 minutes. Remove from heat and add honey if using.",
        usage: "Drink 30-60 minutes before bedtime.",
        notes: "This traditional remedy calms the nervous system and promotes natural sleep cycles."
      },
      {
        title: "Brahmi and Jatamansi Sleep Tonic",
        ingredients: ["½ tsp brahmi powder", "¼ tsp jatamansi powder", "¼ tsp ashwagandha powder", "1 cup warm water or warm milk", "Honey to taste (optional)"],
        preparation: "Mix all herbs together. Add to warm milk or water and stir well.",
        usage: "Take about 30 minutes before bedtime.",
        notes: "Brahmi calms the mind, while jatamansi is one of Ayurveda's premier herbs for promoting healthy sleep."
      }
    ],
    lifestyle: [
      "Perform abhyanga (self-massage) with warm sesame oil before bathing, especially on feet and scalp",
      "Practice gentle, calming yoga poses before bed (like Child's Pose, Legs-Up-The-Wall)",
      "Create a consistent sleep schedule, going to bed and waking up at the same times",
      "Avoid electronic screens 1-2 hours before bedtime",
      "Keep your bedroom cool, dark, and quiet",
      "Use aromatherapy with calming scents like lavender or chamomile"
    ],
    prevention: [
      "Practice meditation or yoga nidra (yogic sleep) regularly",
      "Avoid stimulants like caffeine after noon",
      "Finish eating at least 2-3 hours before bedtime",
      "Perform Shirodhara treatment (oil streaming on forehead) periodically",
      "Exercise regularly, but not close to bedtime",
      "Process worry and anxiety during daytime rather than at night"
    ],
    disclaimer: "These remedies address occasional sleep issues. Chronic insomnia should be evaluated by a healthcare professional, as it may indicate an underlying health condition."
  },
  {
    id: "stress-anxiety",
    condition: "Stress and Anxiety",
    symptoms: ["excessive worry", "restlessness", "difficulty concentrating", "irritability", "muscle tension", "sleep problems", "racing thoughts", "fatigue", "digestive issues"],
    description: "In Ayurveda, anxiety and stress are primarily seen as Vata imbalances, characterized by excessive movement in the mind and nervous system. However, Pitta can contribute irritability and anger, while Kapha might add lethargy and emotional attachment.",
    remedies: [
      {
        title: "Calming Ashwagandha Milk",
        ingredients: ["1 cup milk (dairy or plant-based)", "½ tsp ashwagandha powder", "¼ tsp cardamom powder", "A pinch of saffron", "1 tsp ghee or coconut oil", "Honey to taste (optional)"],
        preparation: "Heat milk with ashwagandha, cardamom and ghee. Simmer for 5 minutes. Add saffron in the last minute. Add honey if desired after removing from heat.",
        usage: "Drink in the evening to calm the nervous system and reduce stress.",
        notes: "Ashwagandha is an adaptogenic herb that helps the body resist stress and promotes mental clarity."
      },
      {
        title: "Brahmi-Shankhpushpi Tonic",
        ingredients: ["½ tsp brahmi powder", "½ tsp shankhpushpi powder", "½ tsp jatamansi powder (optional)", "1 cup warm water", "Honey to taste (optional)"],
        preparation: "Mix all powders together. Add to warm water and stir well. Add honey if desired.",
        usage: "Take once or twice daily, particularly during times of high stress.",
        notes: "This combination calms the mind, improves focus, and reduces anxiety without causing drowsiness."
      }
    ],
    lifestyle: [
      "Practice pranayama (breathing techniques), especially Anulom Vilom (alternate nostril breathing) and deep diaphragmatic breathing",
      "Perform daily self-massage (abhyanga) with warm sesame or coconut oil",
      "Establish a consistent daily routine (dinacharya) with regular mealtimes and sleep schedule",
      "Create boundaries with work, technology, and commitments",
      "Practice meditation daily for at least 10-20 minutes",
      "Engage in moderate exercise like walking, swimming, or gentle yoga"
    ],
    prevention: [
      "Cultivate supportive relationships and community connections",
      "Practice gratitude regularly",
      "Spend time in nature daily",
      "Reduce sensory input when feeling overwhelmed",
      "Limit exposure to negative news and media",
      "Make time for activities that bring joy and meaning"
    ],
    disclaimer: "While these Ayurvedic approaches can help manage everyday stress and mild anxiety, persistent or severe anxiety should be addressed with qualified healthcare professionals."
  },
  {
    id: "joint-pain",
    condition: "Joint Pain (Sandhigata Vata)",
    symptoms: ["joint stiffness", "pain in joints", "swelling", "reduced mobility", "cracking or popping sounds", "warmth in joint area", "pain that worsens in cold weather"],
    description: "In Ayurveda, joint pain (Sandhigata Vata) is primarily considered a Vata disorder, especially when accompanied by dryness and cracking sounds. Pitta involvement brings inflammation and heat, while Kapha causes swelling and fluid accumulation.",
    remedies: [
      {
        title: "Turmeric and Ginger Golden Paste",
        ingredients: ["2 tbsp turmeric powder", "1 tbsp ginger powder or 1 inch fresh ginger (grated)", "1 tsp black pepper powder", "3-4 tbsp water", "2 tbsp coconut oil or ghee"],
        preparation: "Mix turmeric, ginger and black pepper with water to form a paste. Heat gently while adding oil/ghee. Cook for 5-7 minutes, stirring continuously until it forms a smooth paste. Let cool and store in an airtight jar.",
        usage: "Take ½ teaspoon twice daily with warm water or milk.",
        notes: "Turmeric and ginger have powerful anti-inflammatory properties, while black pepper enhances turmeric's bioavailability."
      },
      {
        title: "Joint Pain Oil Massage",
        ingredients: ["¼ cup sesame oil", "5-10 drops of eucalyptus or wintergreen essential oil (optional)", "1 tsp finely ground ginger powder (optional)"],
        preparation: "Warm the sesame oil slightly. Add essential oils and ginger powder if using.",
        usage: "Massage into affected joints using circular motions. Apply gentle pressure for 5-10 minutes. For enhanced effect, wrap with warm cloth after application.",
        notes: "Regular oil massage improves circulation and reduces Vata's drying effect on joints."
      }
    ],
    lifestyle: [
      "Keep joints warm, especially in cold weather",
      "Practice gentle yoga with emphasis on proper alignment",
      "Avoid sitting in the same position for extended periods",
      "Use castor oil packs on painful joints several times a week",
      "Consider Panchakarma treatments like Basti (medicated enema) and Swedana (herbal steam therapy) with professional guidance",
      "Practice weight management to reduce stress on joints"
    ],
    prevention: [
      "Stay well-hydrated throughout the day",
      "Include healthy fats in diet (ghee, coconut oil, olive oil, nuts and seeds)",
      "Avoid exposure to cold, especially after bathing or exercise",
      "Maintain an anti-inflammatory diet rich in colorful vegetables",
      "Consider supplements like ashwagandha, boswellia, and guggulu under guidance",
      "Strengthen muscles around joints through appropriate exercise"
    ],
    disclaimer: "These remedies may help manage mild to moderate joint discomfort. Persistent, severe, or worsening joint pain should be evaluated by a healthcare professional to rule out serious conditions."
  },
  {
    id: "skin-issues",
    condition: "Skin Issues",
    symptoms: ["dryness", "redness", "itching", "rash", "acne", "uneven skin tone", "sensitivity", "excessive oiliness", "flaking"],
    description: "Ayurveda views skin disorders through the lens of dosha imbalances. Vata imbalance causes dryness and premature aging; Pitta imbalance manifests as inflammation, redness, and acne; Kapha imbalance leads to oiliness, clogged pores, and fungal infections.",
    remedies: [
      {
        title: "Neem-Turmeric Paste",
        ingredients: ["2 tbsp neem powder", "1 tsp turmeric powder", "1 tbsp sandalwood powder (optional)", "Rosewater or plain yogurt to mix"],
        preparation: "Mix dry ingredients together. Add enough rosewater or yogurt to form a smooth paste.",
        usage: "Apply to affected areas or as a full face mask for 15-20 minutes. Rinse with lukewarm water.",
        notes: "Neem has antimicrobial properties while turmeric reduces inflammation. Particularly effective for acne and inflammatory skin conditions."
      },
      {
        title: "Aloe Vera and Coconut Oil Moisturizer",
        ingredients: ["2 tbsp fresh aloe vera gel", "1 tbsp coconut oil", "5 drops lavender essential oil (optional)"],
        preparation: "Blend fresh aloe vera gel until smooth. Mix with melted (not hot) coconut oil. Add essential oil if using.",
        usage: "Apply to skin after cleansing. Best used on slightly damp skin.",
        notes: "Excellent for dry, Vata-type skin issues. The combination hydrates while supporting the skin's natural barrier."
      }
    ],
    lifestyle: [
      "Practice dry brushing before bathing to improve circulation and remove dead skin cells",
      "Use gentle, natural cleansers appropriate for your skin type and dosha",
      "Perform abhyanga (self-massage) with appropriate oils for your dosha",
      "Stay hydrated and include healthy fats in your diet",
      "Avoid harsh chemicals, excessive sun exposure, and extreme temperatures",
      "Change pillowcases frequently and clean makeup brushes regularly"
    ],
    prevention: [
      "Maintain a balanced diet rich in antioxidants and appropriate for your constitution",
      "Manage stress through meditation, pranayama, and adequate sleep",
      "Consider internal cleansing practices seasonally under guidance",
      "Avoid foods that aggravate your predominant dosha",
      "Exercise regularly to promote healthy circulation and sweating",
      "Use natural fabrics like cotton and silk that allow skin to breathe"
    ],
    disclaimer: "While these remedies may help with common skin issues, persistent, severe, or worsening skin conditions should be evaluated by a healthcare provider to rule out serious conditions."
  },
  {
    id: "fatigue",
    condition: "Fatigue and Low Energy",
    symptoms: ["persistent tiredness", "lack of motivation", "physical exhaustion", "mental exhaustion", "reduced performance", "difficulty concentrating", "feeling unrested after sleep"],
    description: "In Ayurveda, chronic fatigue may be seen through different dosha imbalances: Vata-type fatigue presents as nervous exhaustion and insomnia; Pitta-type fatigue comes from overworking and burnout; Kapha-type fatigue manifests as heaviness, lethargy, and oversleeping.",
    remedies: [
      {
        title: "Revitalizing Herbal Tonic",
        ingredients: ["½ tsp ashwagandha powder", "¼ tsp shatavari powder", "¼ tsp amla powder", "1 tsp honey", "1 cup warm water or milk"],
        preparation: "Mix the herbs thoroughly. Add to warm water or milk and stir well. Add honey when slightly cooled.",
        usage: "Take once daily, preferably in the morning.",
        notes: "This adaptogenic formula helps restore energy without stimulating and depleting the adrenals."
      },
      {
        title: "Chyawanprash Energy Boost",
        ingredients: ["1 tsp authentic Chyawanprash", "1 cup warm milk or water", "A pinch of cardamom powder (optional)"],
        preparation: "Dissolve Chyawanprash in warm milk or water. Add cardamom if desired.",
        usage: "Take in the morning as an energy tonic or in the afternoon to overcome energy slumps.",
        notes: "Chyawanprash is a traditional Ayurvedic jam packed with herbs and spices that boost immunity and energy."
      }
    ],
    lifestyle: [
      "Establish a regular sleep and wake schedule aligned with natural rhythms",
      "Practice gentle movement like walking or yoga tailored to your energy level",
      "Take breaks throughout the day, practicing conscious relaxation",
      "Spend time outdoors, especially in morning sunlight",
      "Consider intermittent fasting approaches under guidance",
      "Reduce screentime and digital distractions"
    ],
    prevention: [
      "Practice pranayama (breathing exercises) like Bhastrika and Kapalabhati to increase energy",
      "Maintain proper hydration and balanced nutrition",
      "Address any potential nutrient deficiencies with a healthcare provider",
      "Reduce or eliminate stimulants that provide temporary energy boosts",
      "Practice energy management rather than time management",
      "Create clear boundaries between work and rest"
    ],
    disclaimer: "Persistent fatigue should be evaluated by a healthcare provider as it can be a symptom of various conditions including anemia, thyroid issues, depression, or chronic fatigue syndrome."
  }
];

// Keywords and symptom mapping for intelligent matching
export const keywordMapping: Record<string, string[]> = {
  // Common cold related terms
  cold: ["common cold", "congestion", "runny nose", "sneezing"],
  cough: ["common cold", "cough", "sore throat"],
  fever: ["common cold", "fever", "headache"],
  congestion: ["common cold", "congestion", "runny nose"],
  sneezing: ["common cold", "sneezing", "congestion"],
  
  // Indigestion related terms
  stomach: ["indigestion", "bloating", "gas", "stomach pain"],
  gastric: ["indigestion", "acid reflux", "bloating"],
  gas: ["indigestion", "bloating", "belching"],
  indigestion: ["indigestion", "bloating", "stomach pain"],
  acid: ["indigestion", "acid reflux", "stomach pain"],
  bloating: ["indigestion", "gas", "stomach pain"],
  
  // Headache related terms
  headache: ["headache", "head pain", "pressure in head"],
  migraine: ["headache", "throbbing sensation", "sensitivity to light"],
  tension: ["headache", "neck stiffness", "pressure in head"],
  
  // Insomnia related terms
  sleep: ["insomnia", "difficulty falling asleep", "waking up during the night"],
  insomnia: ["insomnia", "difficulty falling asleep", "feeling unrefreshed after sleep"],
  tired: ["insomnia", "feeling unrefreshed after sleep", "daytime fatigue"],
  wakeful: ["insomnia", "difficulty falling asleep", "waking up during the night"],
  
  // Stress and anxiety related terms
  stress: ["stress and anxiety", "excessive worry", "restlessness"],
  anxiety: ["stress and anxiety", "excessive worry", "racing thoughts"],
  tension: ["stress and anxiety", "muscle tension", "irritability"],
  worry: ["stress and anxiety", "excessive worry", "difficulty concentrating"],
  
  // Joint pain related terms
  joint: ["joint pain", "joint stiffness", "pain in joints"],
  arthritis: ["joint pain", "joint stiffness", "swelling"],
  stiffness: ["joint pain", "reduced mobility", "joint stiffness"],
  
  // Skin issues related terms
  skin: ["skin issues", "dryness", "redness"],
  acne: ["skin issues", "acne", "redness"],
  rash: ["skin issues", "rash", "itching"],
  itching: ["skin issues", "itching", "rash"],
  
  // Fatigue related terms
  fatigue: ["fatigue and low energy", "persistent tiredness", "lack of motivation"],
  exhaustion: ["fatigue and low energy", "physical exhaustion", "mental exhaustion"],
  energy: ["fatigue and low energy", "lack of motivation", "reduced performance"],
  tired: ["fatigue and low energy", "persistent tiredness", "feeling unrested after sleep"]
};

// Function to analyze text and find the best matching condition based on symptoms
export const analyzeCondition = (text: string): ConditionMatchResult[] => {
  // Convert text to lowercase for case-insensitive matching
  text = text.toLowerCase();
  
  // Initialize counts for each health condition
  const conditionScores: Record<string, number> = {};
  remediesDatabase.forEach(remedy => {
    conditionScores[remedy.id] = 0;
  });
  
  // Check for direct symptom mentions
  remediesDatabase.forEach(remedy => {
    remedy.symptoms.forEach(symptom => {
      if (text.includes(symptom.toLowerCase())) {
        conditionScores[remedy.id] += 3; // Higher weight for direct symptom matches
      }
    });
    
    // Check for condition name mention
    if (text.includes(remedy.condition.toLowerCase())) {
      conditionScores[remedy.id] += 5; // Highest weight for direct condition mention
    }
  });
  
  // Check for related keywords
  Object.entries(keywordMapping).forEach(([keyword, relatedConditions]) => {
    if (text.includes(keyword.toLowerCase())) {
      relatedConditions.forEach(condition => {
        // Find which remedy this condition belongs to
        remediesDatabase.forEach(remedy => {
          if (remedy.condition.toLowerCase().includes(condition.toLowerCase()) || 
              remedy.symptoms.some(s => s.toLowerCase() === condition.toLowerCase())) {
            conditionScores[remedy.id] += 2; // Medium weight for keyword matches
          }
        });
      });
    }
  });
  
  // Calculate additional context-based matches
  const words = text.split(/\s+/);
  words.forEach(word => {
    if (word.length > 3) { // Ignore very short words
      remediesDatabase.forEach(remedy => {
        // Check if the word appears in the description
        if (remedy.description.toLowerCase().includes(word)) {
          conditionScores[remedy.id] += 0.5;
        }
        
        // Check if word is in the remedy titles or ingredients
        remedy.remedies.forEach(r => {
          if (r.title.toLowerCase().includes(word) || 
              r.ingredients.some(i => i.toLowerCase().includes(word))) {
            conditionScores[remedy.id] += 0.5;
          }
        });
      });
    }
  });
  
  // Find the maximum score
  const maxScore = Math.max(...Object.values(conditionScores));
  
  // Create array of results
  const results: ConditionMatchResult[] = [];
  
  // If we have matches (max score > 0)
  if (maxScore > 0) {
    // Calculate match percentages and sort by score
    Object.entries(conditionScores).forEach(([remedyId, score]) => {
      const matchPercentage = Math.min(Math.round((score / maxScore) * 100), 100);
      
      // Only include results with some relevance (above 30%)
      if (matchPercentage > 30) {
        const remedyData = remediesDatabase.find(r => r.id === remedyId);
        if (remedyData) {
          results.push({
            matchPercentage,
            remedyData
          });
        }
      }
    });
    
    // Sort results by match percentage (highest first)
    results.sort((a, b) => b.matchPercentage - a.matchPercentage);
  }
  
  // If no matches found, return a general response
  if (results.length === 0) {
    const generalRemedy = remediesDatabase.find(r => r.id === "stress-anxiety") || remediesDatabase[0];
    results.push({
      matchPercentage: 50,
      remedyData: generalRemedy
    });
  }
  
  return results;
};

// Function to get a remedy by ID
export const getRemedyById = (id: string): RemedyData | undefined => {
  return remediesDatabase.find(remedy => remedy.id === id);
};

// Function to get all remedies
export const getAllRemedies = (): RemedyData[] => {
  return remediesDatabase;
};
