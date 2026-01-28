// 认证相关功能

// DOM元素
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// 初始化
function initAuth() {
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // 检查用户是否已登录
    checkLoginStatus();
}

// 处理登录
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.querySelector('input[name="remember"]').checked;
    
    // 表单验证
    if (!validateLoginForm(email, password)) {
        return;
    }
    
    // 模拟登录验证（实际项目中应发送到后端）
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // 保存登录状态
        const userData = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        
        if (remember) {
            localStorage.setItem('user', JSON.stringify(userData));
        } else {
            sessionStorage.setItem('user', JSON.stringify(userData));
        }
        
        // 显示登录成功消息
        showMessage('登录成功！正在跳转到首页...', 'success');
        
        // 跳转到首页
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showMessage('邮箱或密码错误，请重试', 'error');
    }
}

// 处理注册
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const agree = document.querySelector('input[name="agree"]').checked;
    
    // 表单验证
    if (!validateRegisterForm(name, email, password, confirmPassword, agree)) {
        return;
    }
    
    // 检查邮箱是否已存在
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) {
        showMessage('该邮箱已被注册', 'error');
        return;
    }
    
    // 创建新用户
    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };
    
    // 保存用户数据
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // 显示注册成功消息
    showMessage('注册成功！正在跳转到登录页面...', 'success');
    
    // 跳转到登录页面
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// 验证登录表单
function validateLoginForm(email, password) {
    if (!email) {
        showMessage('请输入邮箱', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showMessage('请输入有效的邮箱地址', 'error');
        return false;
    }
    
    if (!password) {
        showMessage('请输入密码', 'error');
        return false;
    }
    
    return true;
}

// 验证注册表单
function validateRegisterForm(name, email, password, confirmPassword, agree) {
    if (!name) {
        showMessage('请输入用户名', 'error');
        return false;
    }
    
    if (!email) {
        showMessage('请输入邮箱', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showMessage('请输入有效的邮箱地址', 'error');
        return false;
    }
    
    if (!password) {
        showMessage('请输入密码', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showMessage('密码长度至少为6位', 'error');
        return false;
    }
    
    if (password !== confirmPassword) {
        showMessage('两次输入的密码不一致', 'error');
        return false;
    }
    
    if (!agree) {
        showMessage('请同意服务条款和隐私政策', 'error');
        return false;
    }
    
    return true;
}

// 检查邮箱格式
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 显示消息
function showMessage(message, type) {
    // 检查是否已存在消息元素
    let messageEl = document.querySelector('.message');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'message';
        
        // 添加到表单上方
        if (loginForm) {
            loginForm.parentNode.insertBefore(messageEl, loginForm);
        } else if (registerForm) {
            registerForm.parentNode.insertBefore(messageEl, registerForm);
        }
    }
    
    // 设置消息内容和样式
    messageEl.textContent = message;
    messageEl.className = `message ${type}`;
    
    // 添加消息样式
    messageEl.style.padding = '10px';
    messageEl.style.borderRadius = '4px';
    messageEl.style.marginBottom = '20px';
    messageEl.style.fontSize = '14px';
    
    if (type === 'error') {
        messageEl.style.backgroundColor = '#ffebee';
        messageEl.style.color = '#c62828';
        messageEl.style.border = '1px solid #ef5350';
    } else if (type === 'success') {
        messageEl.style.backgroundColor = '#e8f5e8';
        messageEl.style.color = '#2e7d32';
        messageEl.style.border = '1px solid #4caf50';
    }
    
    // 3秒后移除消息
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.parentNode.removeChild(messageEl);
        }
    }, 3000);
}

// 检查登录状态
function checkLoginStatus() {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (user) {
        // 用户已登录，可以在页面上显示用户信息
        updateNavigation();
    }
}

// 更新导航栏
function updateNavigation() {
    const mainNav = document.querySelector('.main-nav');
    if (mainNav) {
        // 移除登录和注册链接
        const loginLink = mainNav.querySelector('a[href="login.html"]');
        const registerLink = mainNav.querySelector('a[href="register.html"]');
        
        if (loginLink) {
            loginLink.remove();
        }
        
        if (registerLink) {
            registerLink.remove();
        }
        
        // 添加用户信息和退出登录链接
        const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'));
        if (user) {
            const userInfo = document.createElement('span');
            userInfo.className = 'user-info';
            userInfo.textContent = `欢迎，${user.name}`;
            userInfo.style.marginRight = '20px';
            userInfo.style.fontSize = '14px';
            
            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.textContent = '退出登录';
            logoutLink.addEventListener('click', handleLogout);
            
            mainNav.appendChild(userInfo);
            mainNav.appendChild(logoutLink);
        }
    }
}

// 处理退出登录
function handleLogout(e) {
    e.preventDefault();
    
    // 清除登录状态
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    
    // 显示退出登录消息
    showMessage('已退出登录', 'success');
    
    // 刷新页面
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// 初始化认证功能
initAuth();
