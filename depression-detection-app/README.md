# 🧠 MindCare - Mental Health Support Platform

A modern, AI-powered mental health support application combining text analysis, facial expression detection, and intelligent recommendations to help teenagers understand their emotional state and access support.

> **⚠️ IMPORTANT DISCLAIMER**: This application is for awareness and early support only, NOT a medical diagnosis system. Always seek professional help if needed.

---

## 🌟 Features

### Core Analysis Features
- **📝 Text Analysis**: AI-powered emotion detection from written input
- **😊 Facial Expression Detection**: Real-time facial emotion recognition via webcam or image upload
- **🎤 Voice Analysis**: Tone and emotion detection from audio input
- **🔗 Combined Analysis**: Multi-modal analysis combining text and facial data
- **🔍 Hidden Emotion Detection**: Detects suppressed emotions in neutral text

### Wellness & Support
- **📊 Mood Dashboard**: Track mood trends with beautiful visualizations
- **🔥 Wellness Streak**: Gamified daily check-in system
- **💬 AI Chatbot**: 24/7 empathetic conversational support
- **🫁 Guided Breathing**: Interactive breathing exercises (4-7-8, Box breathing)
- **✨ Motivational Quotes**: Daily inspiration and encouragement
- **🎵 Calming Music**: Curated playlists for relaxation
- **💡 Smart Suggestions**: Personalized activity recommendations

### Advanced Features
- **🤖 Explainable AI**: Understand why results were generated
- **🆘 Risk Alert System**: Emergency resources for high depression levels
- **👥 Trusted Contact System**: Alert support network
- **🔐 Privacy & Safety**: HTTPS, minimal data storage, local processing
- **🌙 Dark Mode**: Eye-friendly dark theme
- **📱 Fully Responsive**: Works on all devices

---

## 🛠️ Tech Stack

### Backend
- **Framework**: Flask (Python)
- **NLP**: TextBlob, scikit-learn
- **Computer Vision**: OpenCV, dlib
- **Database**: SQLite
- **APIs**: RESTful backend

### Frontend
- **HTML5** with semantic markup
- **CSS3** with animations and gradients
- **Vanilla JavaScript** (no framework dependencies)
- **Features**: Glassmorphism, responsive grid layout

---

## 📦 Installation & Setup

### Prerequisites
- Python 3.8+
- pip (Python package manager)
- Modern web browser
- Webcam (for facial analysis)
- Microphone (for voice analysis)

### Step 1: Clone/Navigate to Project

```bash
cd depression-detection-app
```

### Step 2: Backend Setup

#### Create Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

#### Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### Environment Variables (Optional)
Create `.env` file in backend folder:
```env
SECRET_KEY=your-secret-key-here
FLASK_ENV=development
DEBUG=True
```

#### Run Backend Server
```bash
python app.py
```

The backend will start at `http://localhost:5000`

### Step 3: Frontend Setup

No build process needed! Open in browser:
```bash
# Option 1: If you have Python
cd frontend
python -m http.server 8000

# Option 2: Or just open in browser
open frontend/index.html
```

Access at `http://localhost:8000`

---

## 📚 Usage Guide

### 1. Text Emotion Analysis
- Navigate to **Analysis** tab
- Click **"Text"** tab
- Write/paste your feelings
- Click **"Analyze Emotion"**
- View emotion, confidence, keywords, and hidden emotion detection

### 2. Facial Expression Detection
- Go to **Analysis** → **"Facial"** tab
- Choose: **Webcam Capture** or **Upload Image**
  - For webcam: Click "Start Webcam" → "Capture" → "Analyze Face"
  - For image: Click upload area → select image → "Analyze Face"
- See emotion, facial cues, arousal, and valence levels

### 3. Voice Analysis
- Go to **Analysis** → **"Voice"** tab
- Click **"Start Recording"**
- Speak naturally
- Click **"Stop Recording"**
- System transcribes and analyzes tone

### 4. Combined Analysis
- Go to **Analysis** → **"Combined"** tab
- Enter text in Step 1
- Upload image in Step 2 (optional)
- Click **"Run Combined Analysis"**
- Get comprehensive assessment with depression level

### 5. Mood Dashboard
- Click **"Dashboard"** in navigation
- View mood statistics and trends
- See 30-day calendar heatmap
- Track wellness streak
- Get mood insights

### 6. Chatbot Support
- Go to **"Chat"**
- Type message or use quick buttons
- AI responds empathetically
- 24/7 support available

### 7. Wellness Zone
- Click **"Wellness"**
- Try breathing exercises
- Get daily quotes
- Listen to calming music
- Explore suggested activities

---

## 🎯 API Endpoints

### Analysis Endpoints
```
POST /api/analyze/text
  - body: { text: string }
  
POST /api/analyze/face
  - body: { image: File }
  
POST /api/analyze/webcam
  - body: { image: base64_string }
  
POST /api/analyze/voice
  - body: { audio: Blob }
  
POST /api/analyze/combined
  - body: { text: string, image: base64_string }
```

### Mood Tracking
```
GET /api/mood/dashboard?period=week|month
GET /api/mood/streak
POST /api/mood/checkin
```

### Chatbot
```
POST /api/chat
  - body: { message: string }
```

### Wellness
```
GET /api/therapy/breathing
GET /api/therapy/quotes
POST /api/alert/risk-assessment
```

---

## 🎨 Customization

### Colors & Themes
Edit CSS variables in `frontend/css/styles.css`:
```css
:root {
    --primary-color: #9b59b6;
    --secondary-color: #3498db;
    --success-color: #4CAF50;
    --danger-color: #F44336;
}
```

### Emotion Keywords
Edit `backend/modules/text_analysis.py`:
```python
EMOTION_KEYWORDS = {
    'happy': ['happy', 'joyful', 'excited', ...],
    'sad': ['sad', 'depressed', ...],
    ...
}
```

### Suggestions & Activities
Edit `backend/modules/suggestion_engine.py` to customize health recommendations.

---

## 🔐 Security & Privacy

✅ **What We Don't Do:**
- Store personal data permanently
- Share data with third parties
- Track users across sessions
- Collect unnecessary information

✅ **What We Do:**
- Use HTTPS for all connections
- Process locally when possible
- Allow data deletion anytime
- Obtain user consent
- Display privacy policy clearly

---

## 🆘 Crisis Resources

If you or someone you know is struggling:

### Global
- **International Association for Suicide Prevention**: https://www.iasp.info/

### USA
- **National Suicide Prevention Lifeline**: 988 (24/7)
- **Crisis Text Line**: Text HOME to 741741

### UK
- **Samaritans**: 116 123 (24/7)

### India
- **AASRA**: 9820466726 (24/7)
- **iCall**: 9152987821 (9AM-11PM)

### Australasia
- **Lifeline Australia**: 13 11 14
- **1 to 5 NZ**: 1-5 or text 1737

---

## 📊 Project Structure

```
depression-detection-app/
├── backend/
│   ├── app.py                 # Main Flask application
│   ├── requirements.txt        # Python dependencies
│   └── modules/
│       ├── text_analysis.py    # NLP emotion detection
│       ├── face_detection.py   # Facial recognition
│       ├── decision_engine.py  # Combined analysis logic
│       ├── suggestion_engine.py # Health recommendations
│       ├── chatbot.py          # AI chatbot
│       └── mood_tracker.py     # Mood history & trends
│
├── frontend/
│   ├── index.html             # Main HTML
│   ├── css/
│   │   └── styles.css         # All styling
│   └── js/
│       ├── app.js             # Main application logic
│       └── utils.js           # Utility functions
│
└── README.md                  # This file
```

---

## 🚀 Deployment

### Heroku Deployment
1. Create `Procfile`:
```
web: python backend/app.py
```

2. Deploy:
```bash
heroku create mindcare-app
git push heroku main
```

### Docker Deployment
```dockerfile
FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "backend/app.py"]
```

---

## 📈 Performance Optimization

### Frontend
- Minify CSS/JS for production
- Use lazy loading for images
- Enable compression in server
- Cache static files

### Backend
- Use database indexing
- Implement caching
- Optimize ML models
- Load models at startup

---

## 🐛 Troubleshooting

### Webcam Not Working
- Check browser permissions
- Ensure HTTPS (required for camera access)
- Try different browser

### API Connection Issues
- Ensure backend is running on port 5000
- Check CORS is enabled
- Verify network connectivity

### High CPU Usage
- Reduce face detection frequency
- Use smaller images
- Consider GPU acceleration

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork repository
2. Create feature branch
3. Make changes
4. Submit pull request

---

## 📄 License

This project is open-source and available under MIT License.

---

## 👥 Team

Built with ❤️ for mental health awareness.

---

## 📞 Support

For issues, questions, or feedback:
- Open an issue on GitHub
- Contact: support@mindcare.app
- Emergency: Use crisis resources listed above

---

## 🌟 Acknowledgments

This application was created to raise mental health awareness among teenagers. Special thanks to:
- Mental health professionals for guidance
- Open-source community
- Everyone supporting mental health awareness

---

## ⭐ If This Helps You

Please consider starring this repository if it was helpful! Your support means everything.

---

**Remember: Your mental health matters. You are not alone. 💙**

---

*Last Updated: April 2026*
