# Quick Start Guide for MindCare

## ⚡ 5-Minute Setup

### Windows Users

```powershell
# 1. Navigate to project
cd path\to\depression-detection-app

# 2. Create environment
python -m venv venv
.\venv\Scripts\activate

# 3. Install backend dependencies
cd backend
pip install -r requirements.txt

# 4. Run backend (Terminal 1)
python app.py

# 5. In new terminal, run frontend (Terminal 2)
cd frontend
python -m http.server 8000

# 6. Open browser
# Go to http://localhost:8000
```

### macOS/Linux Users

```bash
# 1. Navigate to project
cd path/to/depression-detection-app

# 2. Create environment
python3 -m venv venv
source venv/bin/activate

# 3. Install backend dependencies
cd backend
pip install -r requirements.txt

# 4. Run backend (Terminal 1)
python app.py

# 5. In new terminal, run frontend (Terminal 2)
cd frontend
python -m http.server 8000

# 6. Open browser
# Go to http://localhost:8000
```

---

## 🎯 Features to Try First

### 1. Text Analysis ⚡
- Click "Analysis" → "Text"
- Type: "I feel really sad and alone today"
- Click "Analyze Emotion"
- See depression level and keywords

### 2. Facial Detection 📷
- Click "Analysis" → "Facial"
- Click "Start Webcam"
- Make different facial expressions
- Click "Capture" to take photo
- Click "Analyze Face"

### 3. Chatbot 💬
- Click "Chat"
- Type: "I am feeling stressed"
- AI responds with support
- Try quick buttons

### 4. Dashboard 📊
- Click "Dashboard"
- See mood tracking
- Check your wellness streak
- View mood trends

### 5. Wellness Zone 🧘
- Click "Wellness"
- Try breathing exercise
- Get daily motivation
- Listen to calming music

---

## 🔧 Troubleshooting

### Issue: Port 5000 Already in Use

```bash
# macOS/Linux - Find and kill process
lsof -i :5000
kill -9 <PID>

# Windows - Use different port
python app.py --port 5001
```

### Issue: Module Not Found

```bash
# Ensure virtual environment is activated
# Then reinstall dependencies
pip install --upgrade -r requirements.txt
```

### Issue: Webcam Not Working

- Check browser camera permissions
- Grant permission when browser asks
- Try Firefox if Chrome doesn't work
- Ensure HTTPS or localhost

### Issue: API Errors

- Check backend is running (http://localhost:5000/api/health)
- Check browser console for errors (F12)
- Ensure CORS is enabled in Flask app

---

## 📊 Expected Behavior

### Text Analysis Results
- **Happy**: Green (😊)
- **Neutral**: Yellow (😐)
- **Sad/Stress**: Red (😢😠)

### Confidence Score
- **0.8+**: High confidence
- **0.5-0.8**: Moderate confidence
- **<0.5**: Low confidence

### Depression Level
- **Low**: You're managing well! 🟢
- **Medium**: Consider self-care 🟡
- **High**: Seek professional help 🔴

---

## 📝 Example Inputs to Test

### Text Analysis
```
"I'm really struggling with everything lately"
→ Emotion: Sad, Confidence: 0.85

"I'm feeling great today!"
→ Emotion: Happy, Confidence: 0.90

"I don't know how I feel"
→ Emotion: Neutral, Confidence: 0.65
```

### Facial Expressions
- Smile → Happy
- Frown → Sad
- Raised eyebrows → Surprised
- Furrowed brows → Angry/Stressed

---

## 🎨 Customizing the App

### Change Primary Color
Edit `frontend/css/styles.css`:
```css
--primary-color: #e74c3c;  /* Change from purple to red */
```

### Add Your Logo
Replace in `frontend/index.html`:
```html
<div class="nav-logo">
    <i class="fas fa-heart"></i> YourName
</div>
```

### Modify Emotions
Edit `backend/modules/text_analysis.py`:
```python
EMOTION_KEYWORDS = {
    'hopeful': ['hopeful', 'optimistic', ...],
    ...
}
```

---

## 🚀 Next Steps After Setup

1. **Explore All Features**
   - Try each tab
   - Test different inputs
   - Check dashboard trends

2. **Customize**
   - Change colors to your brand
   - Add your own chatbot responses
   - Modify wellness suggestions

3. **Deploy**
   - Deploy backend to Heroku/Railway
   - Deploy frontend to Netlify/Vercel
   - Make it public

4. **Enhanced Features**
   - Add database persistence
   - Integrate with real ML models
   - Add user authentication
   - Connect with support networks

---

## 📱 Mobile Testing

Test on mobile device:

```bash
# Find your IP address
# Windows: ipconfig
# macOS/Linux: ifconfig

# Run on accessible IP
python -m http.server --bind 0.0.0.0 8000

# Access from mobile:
# http://<your-ip>:8000
```

---

## 🔐 Production Checklist

Before deploying to production:

- [ ] Set `DEBUG=False` in Flask
- [ ] Use strong `SECRET_KEY`
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Set up proper database
- [ ] Add input validation
- [ ] Implement rate limiting
- [ ] Add error logging
- [ ] Set up monitoring
- [ ] Create backup strategy

---

## 💡 Pro Tips

1. **Dark Mode**: Click moon icon for dark theme
2. **Keyboard Shortcuts**: 
   - Ctrl+Enter to analyze text
   - Ctrl+Enter to send chat message
3. **Daily Quotes**: Get different quotes each time
4. **Streak Tracking**: Check in daily to maintain streak
5. **Export Data**: Download mood data for analysis

---

## 🆘 Need Help?

1. Check console errors: Press F12 → Console
2. Review backend logs
3. Check API endpoints: `http://localhost:5000/api/health`
4. Read main README.md
5. Check troubleshooting section

---

## 🎉 You're All Set!

Your MindCare mental health platform is ready to use. 

**Remember**: This is for awareness and support, not diagnosis. Always seek professional help when needed. 💙

---

**Happy exploring!** 🚀
