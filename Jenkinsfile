pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/Joyfer-morito/teste-e2e-ebac.git'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat '''set NO_COLOR=1
npm test'''
            }
        }
    }
}