import fs from "fs";

export function configScraper(jsonData) {
	try {
		const jsonString = JSON.stringify(jsonData, null, 2);
		fs.writeFileSync("config.json", jsonString, "utf-8");
	} catch (error) {
		console.error(`Erreur lors de l'écriture du fichier ${filePath}: ${error.message}`);
	}
}
