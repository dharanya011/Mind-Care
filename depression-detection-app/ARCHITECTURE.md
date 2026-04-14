# MindCare Architecture Documentation

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (HTML/CSS/JS)                   │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐   │
│  │ Analysis │ Chatbot  │ Dashboard│ Wellness │  Settings │  │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘   │
│                          ↓↑                                   │
│                    REST API (/api)                            │
└─────────────────────────────────────────────────────────────┘
                            ↓↑
┌─────────────────────────────────────────────────────────────┐
│                  Backend (Flask + Python)                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Core Modules                                         │   │
│  ├─ text_analysis.py (NLP, TextBlob, scikit-learn)    │   │
│  ├─ face_detection.py (OpenCV, dlib)                  │   │
│  ├─ decision_engine.py (Logic, Fusion)                │   │
│  ├─ suggestion_engine.py (Recommendations)            │   │
│  ├─ chatbot.py (Empathetic AI)                        │   │
│  └─ mood_tracker.py (SQLite, Analytics)               │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                    │
│  ┌──────────────────────────────────┐                       │
│  │ SQLite Database (mood_data.db)   │                       │
│  │ ├─ mood_entries                  │                       │
│  │ ├─ streak_data                   │                       │
│  │ └─ feedback                      │                       │
│  └──────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow Architecture

### 1. Text Analysis Flow

```
User Input (Text)
    ↓
TextAnalyzer.analyze()
    ├─ Extract keywords
    ├─ Sentiment analysis (TextBlob)
    ├─ Emotion classification
    ├─ Confidence calculation
    └─ Hidden emotion detection
    ↓
Result JSON
    ├─ emotion: "sad" | "happy" | "neutral" | etc.
    ├─ confidence: 0.0-1.0
    ├─ keywords: [...]
    ├─ sentiment_score: -1.0 to 1.0
    ├─ polarity: "positive" | "negative" | "neutral"
    └─ explanation: "Your text suggests..."
    ↓
Frontend Display
```

### 2. Facial Analysis Flow

```
Image Input (webcam/upload)
    ↓
FaceDetector.detect_emotion()
    ├─ Load Haar Cascade
    ├─ Convert to grayscale
    ├─ Detect faces
    ├─ Extract features
    ├─ Classify emotion (rule-based/ML)
    ├─ Calculate arousal & valence
    └─ Detect hidden emotions
    ↓
Result JSON
    ├─ emotion: "happy" | "sad" | etc.
    ├─ confidence: 0.0-1.0
    ├─ facial_cues: ["raised cheeks", ...]
    ├─ arousal: 0-100
    ├─ valence: 0-100
    └─ hidden_emotion: "Possible inner tension"
    ↓
Frontend Display
```

### 3. Combined Analysis Flow

```
Text + Image Input
    ↓
parallel execution
    │
    ├─→ TextAnalyzer.analyze(text)
    │
    └─→ FaceDetector.detect_emotion(image)
    ↓
DecisionEngine.make_decision()
    ├─ Calculate text severity score
    ├─ Calculate facial severity score
    ├─ Weight and normalize
    ├─ Map to depression level
    ├─ Generate reasoning
    └─ Get recommendations
    ↓
Result JSON
    ├─ depression_level: "Low" | "Medium" | "High"
    ├─ severity_score: 0.0-10.0
    ├─ confidence: 0.0-1.0
    ├─ reasoning: "Based on text and facial analysis..."
    └─ recommendations: [...]
    ↓
MoodTracker.log_entry() → SQLite Database
    ↓
SuggestionEngine.get_suggestions()
    ↓
Frontend Display + Emergency Alert Check
```

### 4. Chatbot Conversation Flow

```
User Message
    ↓
MentalHealthChatbot.get_response()
    ├─ Detect emotional keywords
    ├─ Select appropriate response template
    ├─ Generate follow-up question
    └─ Detect emotional needs (crisis detection)
    ↓
Response JSON
    ├─ response: "I hear you..."
    ├─ emotional_keywords: ["sad", ...]
    └─ suggested_activities: [...]
    ↓
Crisis Detection?
    ├─ YES → Show emergency resources
    └─ NO → Normal response
    ↓
Frontend Display
```

### 5. Mood Tracking Flow

```
Daily Check-in or Analysis Result
    ↓
MoodTracker.log_entry()
    ├─ Record timestamp
    ├─ Store emotions
    ├─ Update streak
    └─ Save to SQLite
    ↓
MoodTracker.get_dashboard_data()
    ├─ Query last 7/30 days
    ├─ Calculate statistics
    ├─ Generate heatmap
    ├─ Analyze trends
    └─ Compare periods
    ↓
Dashboard JSON
    ├─ entries: [...]
    ├─ statistics: {low%, medium%, high%, avg_confidence}
    ├─ trends: {direction, change, message}
    ├─ heatmap: [{date, intensity, level}, ...]
    └─ streak: number
    ↓
Frontend Visualization
```

---

## Module Architecture

### TextAnalyzer Module
```python
TextAnalyzer
├── analyze(text)
│   ├─ Keyword detection
│   ├─ Sentiment analysis
│   └─ Confidence calculation
├── detect_emotion_from_keywords()
├── extract_keywords()
├── calculate_confidence()
├── _generate_explanation()
├── analyze_tone(audio)
├── transcribe_audio(file)
└── detect_hidden_emotions(text)
```

### FaceDetector Module
```python
FaceDetector
├── detect_emotion(image_file)
│   └─ _analyze_frame()
├── detect_emotion_from_base64(image_data)
├── _classify_emotion()
├── _calculate_affect()
└── _detect_hidden_emotion()
```

### DecisionEngine Module
```python
DecisionEngine
├── make_decision(text_analysis, facial_analysis)
├── _get_depression_level(severity)
├── _generate_reasoning()
├── _get_recommendations()
├── explain_decision()
└── get_trend_analysis()
```

### SuggestionEngine Module
```python
SuggestionEngine
├── get_suggestions(depression_level)
├── get_activities()
├── _get_personalized_tip()
├── get_daily_prompt()
├── get_breathing_guide()
└── get_coping_strategies()
```

### MentalHealthChatbot Module
```python
MentalHealthChatbot
├── get_response(user_message)
├── _detect_emotion()
├── _get_follow_up()
├── detect_emotional_need()
├── get_encouraging_message()
├── get_crisis_response()
├── generate_session_summary()
└── get_wellness_check_questions()
```

### MoodTracker Module
```python
MoodTracker
├── log_entry()
├── log_feedback()
├── get_dashboard_data()
├── update_streak()
├── get_streak()
├── _generate_heatmap()
├── _calculate_trends()
├── get_weekly_summary()
└── generate_mood_report()
```

---

## API Endpoint Map

### Analysis APIs
```
POST /api/analyze/text
POST /api/analyze/face
POST /api/analyze/webcam
POST /api/analyze/voice
POST /api/analyze/combined
```

### Mood Tracking APIs
```
GET  /api/mood/dashboard?period=week|month
GET  /api/mood/streak
POST /api/mood/checkin
```

### Chatbot APIs
```
POST /api/chat
```

### Wellness APIs
```
GET  /api/therapy/breathing
GET  /api/therapy/quotes
POST /api/alert/risk-assessment
POST /api/alert/trusted-contact
```

### Explainability APIs
```
POST /api/explain/{analysis_type}
```

### User APIs
```
GET  /api/preferences
POST /api/preferences
GET  /api/privacy
POST /api/feedback
```

### System APIs
```
GET  /api/health
```

---

## Database Schema

### mood_entries Table
```sql
CREATE TABLE mood_entries (
    id INTEGER PRIMARY KEY,
    timestamp TEXT,
    text_emotion TEXT,
    facial_emotion TEXT,
    combined_result TEXT,
    depression_level TEXT,
    confidence REAL
)
```

### streak_data Table
```sql
CREATE TABLE streak_data (
    user_id TEXT PRIMARY KEY,
    current_streak INTEGER,
    last_checkin TEXT
)
```

### feedback Table
```sql
CREATE TABLE feedback (
    id INTEGER PRIMARY KEY,
    timestamp TEXT,
    feedback TEXT,
    mood_level TEXT
)
```

---

## Frontend Component Structure

### Pages
- **Home**: Hero section, features overview
- **Analysis**: Text, Facial, Voice, Combined tabs
- **Dashboard**: Statistics, Heatmap, Trends
- **Chatbot**: Conversation interface
- **Wellness**: Breathing, Quotes, Music, Activities

### Key Classes/Objects
```javascript
app {
    // State
    currentPage
    darkMode
    selectedImage
    conversationHistory
    
    // Methods
    init()
    navigateTo()
    
    // Analysis
    analyzeText()
    analyzeFace()
    analyzeVoice()
    analyzeCombined()
    
    // Chatbot
    sendChatMessage()
    addChatMessage()
    
    // Dashboard
    loadDashboard()
    displayDashboardData()
    
    // Wellness
    startBreathingExercise()
    getNewQuote()
    
    // UI
    toggleTheme()
    showEmergencyAlert()
}
```

---

## State Management Flow

```
User Action
    ↓
Event Listener
    ↓
JavaScript Handler
    ↓
API Call (fetch)
    ↓
Backend Processing
    ↓
JSON Response
    ↓
DOM Update
    ↓
Visual Feedback
```

---

## Security Architecture

### Input Validation
- Text length checks
- File type validation
- Image dimension checks
- Message sanitization

### Data Protection
- No permanent storage of sensitive data
- Session-based tracking
- HTTPS in production
- CORS restrictions

### Error Handling
- Try-catch blocks
- Graceful error messages
- User-friendly alerts
- Detailed backend logging

---

## Performance Optimization

### Frontend
- Lazy loading
- Image compression
- CSS minification
- Caching strategies

### Backend
- Database indexing
- Result caching
- Efficient algorithm complexity
- Async/parallel processing

---

## Extension Points

### Add New Analysis Type
1. Create module in `backend/modules/`
2. Add endpoint in `app.py`
3. Create frontend form
4. Wire API call in JavaScript

### Add New Suggestion Type
1. Update `suggestion_engine.py`
2. Add to recommendation templates
3. Update frontend UI

### Add New Chatbot Response
1. Update `chatbot.py` keyword dictionary
2. Add response templates
3. Test in chat interface

---

## Error Handling Strategy

```
Input Layer
    ↓
Validation Errors → 400 Bad Request
    ↓
Processing Layer
    ↓
Logic Errors → 422 Unprocessable Entity
    ↓
Resource Errors → 404 Not Found
    ↓
Server Errors → 500 Internal Server Error
    ↓
Response → User-Friendly Message
```

---

## Testing Strategy

### Unit Tests
- Test each module independently
- Mock external dependencies
- Verify output formats

### Integration Tests
- Test API endpoints
- Test data flow
- Verify database interactions

### UI Tests
- Test form submissions
- Test navigation
- Test theme switching

---

## Deployment Architecture

### Development
```
Local Machine
├─ Frontend: http://localhost:8000
├─ Backend: http://localhost:5000
└─ Database: SQLite (local file)
```

### Production
```
Cloud Provider (Heroku/AWS/GCP)
├─ Frontend: CDN/Netlify/Vercel
├─ Backend: Container/Serverless
└─ Database: PostgreSQL/MySQL
```

---

## Scalability Considerations

### Current (Single Instance)
- Local SQLite
- Single backend process
- Synchronous processing

### Future (Scaled)
- PostgreSQL/MySQL cluster
- Load balancing
- Async task queue (Celery)
- Caching layer (Redis)
- CDN for frontend
- Microservices architecture

---

## Monitoring & Logging

### Backend Logging
- Request logs
- Error logs
- Analysis results
- Performance metrics

### Frontend Monitoring
- User interactions
- API response times
- Error reporting
- Session tracking

---

This architecture ensures:
✅ **Modularity**: Easy to maintain and extend
✅ **Scalability**: Ready for growth
✅ **Security**: User data protection
✅ **Reliability**: Error handling
✅ **Performance**: Optimized for speed
