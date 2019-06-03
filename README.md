# Middleware Engineering "Componentbase UI with Spring React"

## Aufgabenstellung
Die detaillierte [Aufgabenstellung](TASK.md) beschreibt die notwendigen Schritte zur Realisierung.

### Voraussetzungen
* Maven
* Mongo
* Java
* React
* npm

## Implementierung

Die Application lässt sich starten mit ```mvn spring-boot:run```

Aufsetzung einer normalen Spring-Application welche sich mit einer MongoDB verbindet und alle Daten auf einer Rest-SS ausgibt.[Spring-MongoDb](https://spring.io/guides/gs/accessing-data-mongodb/)

Um React verwenden zu können brauchen wir **npm** weshalb wir diese auch zur pom.xml hinzufügen müssen und das machen wir mittels eines plugins.

```xml
<plugin>
	<groupId>com.github.eirslett</groupId>
	<artifactId>frontend-maven-plugin</artifactId>
	<version>1.6</version>
	<configuration>
		<installDirectory>target</installDirectory>
	</configuration>
	<executions>
		<execution>
			<id>install node and npm</id>
			<goals>
				<goal>install-node-and-npm</goal>
			</goals>
			<configuration>
				<nodeVersion>v10.11.0</nodeVersion>
				<npmVersion>6.4.1</npmVersion>
			</configuration>
		</execution>
		<execution>
			<id>npm install</id>
			<goals>
				<goal>npm</goal>
			</goals>
			<configuration>
				<arguments>install</arguments>
			</configuration>
		</execution>
		<execution>
			<id>webpack build</id>
			<goals>
				<goal>webpack</goal>
			</goals>
		</execution>
	</executions>
</plugin>
```

Das ermöglicht uns React in Spring zu verwenden. Weiters benötigen wir die Datein **package. json und webpack.config.js**.

Diese schauen wie folgt aus:

**package.json**

```json
{
  "name": "spring-data-rest-and-reactjs",
  "version": "0.1.0",
  "description": "Demo of ReactJS + Spring Data REST",
  "repository": {
    "type": "git",
    "url": "git@github.com:spring-guides/tut-react-and-spring-data-rest.git"
  },
  "keywords": [
    "rest",
    "hateoas",
    "spring",
    "data",
    "react"
  ],
  "author": "Greg L. Turnquist",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/spring-guides/tut-react-and-spring-data-rest/issues"
  },
  "homepage": "https://github.com/spring-guides/tut-react-and-spring-data-rest",
  "dependencies": {
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "rest": "^1.3.1"
  },
  "scripts": {
    "watch": "webpack --watch -d"
  },
  "devDependencies": {
    "@babel/core": "^7.1.0",
    "@babel/preset-env": "^7.1.0",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.2",
    "webpack": "^4.19.1",
    "webpack-cli": "^3.1.0"
  }
}
```

**webpack.config.js** hier wird zum Beispiel definiert wo sich der Entry point also das main ReactJs File befindet in diesem Fall app.js in src/main/js .

```js
var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};
```



Die Entwicklung für das Frontend findet nun nur im app.js File statt.

```js

```



#### Fragen

## Fragestellung für Protokoll

- Was ist React?
  - Ist eine Javascript Library um User Interfaces zu bauen.
- React untertützt eine komponentenbasierte Entwicklung. Beschreiben Sie den Begriff "Component" im Zusammenhang mit React.
  - Components stellen mehr Features im Detail zur Verfügung im diese auf der Seite darzustellen.
- Wozu wird die Klasse React.Component verwendet?
  - Components ermöglichen es das User Interface in unabhängige Teile zu teile und diese zu isolieren.
- Welche Teile der Applikation werden in der Funktion render() implementiert?
  - Das was Schluss endlich auf der Seite angezeigt werden soll den in der render Methode gibt man nämlich den code zurück welcher dann als htlm in das div geschrieben wird.
- Vervollständigen Sie die angeführten Sätze:
  - React is a Javascript Library/Framework - one of the most popular ones, with over 100,000 stars on GitHub.
  - React is not a framework (unlike Angular, which is more opinionated).
  - React is an Facebook project created by Jordan Walke.
  - React is used to build applications on the front end.
  - React is the View and Model layer of an MVC application (Model View Controller)

## Quellen
* [ReactJS REST API GET Example](https://www.roytuts.com/react-rest-api-get-example/)
* [React Component](https://reactjs.org/docs/react-component.html)
* [React Components](https://reactjs.org/docs/react-api.html#react.component)

- [React.js and Spring Data REST](https://spring.io/guides/tutorials/react-and-spring-data-rest/#react-and-spring-data-rest-part-3)
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)