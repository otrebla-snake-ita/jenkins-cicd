pipeline {
    agent {
        docker {
            image 'node:20'
            args '-v /var/run/docker.sock:/var/run/docker.sock --network=host'
        }
    }
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
            steps { 
                sh 'pwd'
                sh 'ls -la'
                sh 'cd node-proj' 
                sh 'ls -la'
                sh 'pwd'
                sh 'npm install'
            }
        }

        // stage('Lint') {
        //     steps { sh 'cd ./node-proj' }
        //     steps { sh 'npm run lint:ci' }
        // }
    }
}