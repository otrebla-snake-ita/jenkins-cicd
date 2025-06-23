pipeline {
    agent any
    stages {
        stage('Pre checkout') {
            steps {
                echo "Hello world"
            }
        }

        stage('Clone repo') {
            steps {
                sh 'pwd'
                git branch: 'main', url: 'https://github.com/otrebla-snake-ita/jenkins-cicd.git'
                sh 'ls -la'
            }
        }

        stage('Install') {
            steps { sh 'npm install' }
        }

        stage('Lint') {
            steps { sh 'cd ./node-proj' }
            steps { sh 'npm run lint:ci' }
        }
    }
}