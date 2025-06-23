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

        stage('Build Docker Image') {
            steps {
                sh '''
                pwd
                whoami
                docker build -t flask-api:1.0 .
                '''
            }
        }
    }
    post {
        success {
            echo 'OK'
            mail to: 'alberto.marinucci@insoore.com',
            subject: "Build Success: ${currentBuild.fullDisplayName}.",
            body: "The build was successful! Check the logs here: ${env.BUILD_URL}"
        }
        failure {
            echo 'KO'
            mail to: 'alberto.marinucci@insoore.com',
            subject: "Build failed: ${currentBuild.fullDisplayName}",
            body: "The build was failed!. Check the logs here: ${env.BUILD_URL}"
        }
    }
}