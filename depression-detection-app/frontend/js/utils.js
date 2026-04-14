/**
 * Utility Functions for MindCare
 */

// API Helper Functions
async function apiCall(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// LocalStorage Helpers
const storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    get(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    clear() {
        localStorage.clear();
    }
};

// Animation Helpers
const animations = {
    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        setTimeout(() => {
            element.style.transition = `opacity ${duration}ms ease-in`;
            element.style.opacity = '1';
        }, 10);
    },
    
    fadeOut(element, duration = 300) {
        element.style.transition = `opacity ${duration}ms ease-out`;
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    },
    
    slideIn(element, direction = 'down', duration = 300) {
        const transforms = {
            'down': 'translateY(-20px)',
            'up': 'translateY(20px)',
            'left': 'translateX(20px)',
            'right': 'translateX(-20px)'
        };
        
        element.style.opacity = '0';
        element.style.transform = transforms[direction] || transforms['down'];
        element.style.display = 'block';
        
        setTimeout(() => {
            element.style.transition = `all ${duration}ms ease-out`;
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
        }, 10);
    }
};

// Date/Time Helpers
const dateUtils = {
    formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    },
    
    formatTime(date) {
        return new Date(date).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    },
    
    getDaysSince(date) {
        const now = new Date();
        const then = new Date(date);
        const diff = now - then;
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
};

// Emotion Data
const emotionDatabase = {
    colors: {
        'happy': '#4CAF50',
        'sad': '#F44336',
        'neutral': '#FFC107',
        'anxious': '#FF9800',
        'stress': '#D32F2F',
        'angry': '#C62828',
        'surprised': '#FF9800',
        'scared': '#9C27B0'
    },
    
    emojis: {
        'happy': '😊',
        'sad': '😢',
        'neutral': '😐',
        'anxious': '😰',
        'stress': '😠',
        'angry': '😡',
        'surprised': '😮',
        'scared': '😨'
    },
    
    descriptions: {
        'happy': 'You appear to be in a positive mood',
        'sad': 'You seem to be experiencing sadness',
        'neutral': 'Your emotional state appears stable',
        'anxious': 'You may be feeling anxious or worried',
        'stress': 'You seem to be under stress',
        'angry': 'You appear to be feeling angry',
        'surprised': 'You seem surprised',
        'scared': 'You appear to be feeling scared'
    }
};

// Validation Helpers
const validation = {
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    isValidText(text, minLength = 3) {
        return text && text.trim().length >= minLength;
    },
    
    isValidImage(file) {
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        return file && validTypes.includes(file.type);
    }
};

// Notification Helpers
const notifications = {
    show(message, type = 'info', duration = 3000) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            backgroundColor: this.getColor(type),
            color: 'white',
            zIndex: '9999',
            animation: 'slideIn 0.3s ease-out'
        });
        
        document.body.appendChild(notification);
        
        // Auto-remove
        setTimeout(() => {
            notification.remove();
        }, duration);
    },
    
    getColor(type) {
        const colors = {
            success: '#4CAF50',
            error: '#F44336',
            warning: '#FFC107',
            info: '#2196F3'
        };
        return colors[type] || colors.info;
    }
};

// Chart Data Helpers
const chartHelpers = {
    prepareMoodChartData(entries) {
        const data = {
            labels: [],
            datasets: [{
                label: 'Mood Level',
                data: [],
                borderColor: '#9b59b6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                tension: 0.4
            }]
        };
        
        entries.forEach(entry => {
            const date = dateUtils.formatDate(entry.timestamp);
            if (!data.labels.includes(date)) {
                data.labels.push(date);
                
                const valueMap = { 'Low': 1, 'Medium': 2, 'High': 3 };
                data.datasets[0].data.push(valueMap[entry.depression_level] || 0);
            }
        });
        
        return data;
    }
};

// Health Tips Database
const healthTips = [
    {
        title: 'Practice Mindfulness',
        description: 'Spend 5-10 minutes daily in mindful breathing or meditation.',
        icon: '🧘'
    },
    {
        title: 'Exercise Regularly',
        description: 'Physical activity releases endorphins and improves mental health.',
        icon: '🏃'
    },
    {
        title: 'Get Quality Sleep',
        description: 'Aim for 7-9 hours of sleep each night for optimal mental health.',
        icon: '😴'
    },
    {
        title: 'Connect with Others',
        description: 'Social connection is crucial for mental wellbeing.',
        icon: '👥'
    },
    {
        title: 'Eat Healthy',
        description: 'Nutrition plays a key role in mental and emotional health.',
        icon: '🥗'
    },
    {
        title: 'Limit Screen Time',
        description: 'Too much screen time can negatively impact mental health.',
        icon: '📱'
    },
    {
        title: 'Spend Time in Nature',
        description: 'Nature exposure can reduce stress and improve mood.',
        icon: '🌳'
    },
    {
        title: 'Practice Gratitude',
        description: 'Regularly acknowledge things you\'re grateful for.',
        icon: '🙏'
    }
];

// Crisis Resources
const crisisResources = {
    global: [
        {
            name: 'International Association for Suicide Prevention',
            url: 'https://www.iasp.info/resources/Crisis_Centres/'
        }
    ],
    usa: [
        {
            name: 'National Suicide Prevention Lifeline',
            phone: '988',
            available: '24/7'
        },
        {
            name: 'Crisis Text Line',
            text: 'Text HOME to 741741',
            available: '24/7'
        }
    ],
    uk: [
        {
            name: 'Samaritans',
            phone: '116 123',
            available: '24/7'
        }
    ],
    india: [
        {
            name: 'AASRA',
            phone: '9820466726',
            available: '24/7'
        },
        {
            name: 'iCall',
            phone: '9152987821',
            available: '9AM - 11PM'
        }
    ]
};

// Export for use
console.log('✅ Utility functions loaded');
