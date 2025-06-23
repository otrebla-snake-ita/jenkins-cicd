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
                sh '''
                cd ./node-proj
                npm install
                ls -la
                '''
            }
        }

        stage('Lint') {
            steps { sh '''
            cd ./node-proj
            npm run lint:ci
            ''' }
        }
    }
}