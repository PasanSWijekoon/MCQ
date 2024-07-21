
/**
 * Export all the quizzes as an array, see the CONTRIBUTING.md
 * guide for directions for adding new questions or modifying
 * the content of these challenges.
 */


import paper1 from './01_overloading.js';
import paper2 from './02_paper1';
import paper3 from './03_Variables.js';
import paper4 from './04_Inheritance.js';
import paper5 from './05_overiding.js';
import paper6 from './06_Polymorphism.js';
import paper7 from './07_Polymorphism1.js';
import paper8 from './08_Polymorphism2.js';
import paper9 from './09_Encapsulation.js';
import paper10 from  './10_Abstractclass.js';
import paper11 from './11_Interface.js';
import paper12 from './12_Access_Modifiers.js';
import paper13 from './13_Constructor.js';
import paper14 from './14_Garbage Collection.js';
import paper15 from './15_Finalize.js';
import paper16 from './16_Arrays.js';
import paper17 from './17_Casting.js';


  
const challenges = [
	paper1,
	
	paper3,
	paper4,
	paper5,
	paper6,
	paper7,
	paper8,
	paper9,
	paper10,
	paper11,
	paper12,
	paper13,
	paper14,
	paper15,
	paper16,
	paper17,
	paper2
	
];

/* This doesn't cover everything but serves as a basic verification that
 * the quiz data being loading into the app is complete, and will not
 * break the app (e.g. if the title field was empty). Any contributions
 * to the app should be quality-assured manually by review, but this
 * can serve as a last resort to guard against problems. */

export default (function(challenges) {

	let noExplanation = 0;
	let rejectedTitles = [];
	let rejectedCategories = [];

	const verified = challenges.reduce((verified, category) => {

		const noRepeatTitle = {};
		const noRepeatSubtitle = {};

		if (!category.title || !category.category) {
			rejectedCategories.push(category.title);
			return verified;
		}
		const verifiedQuestions = category.challenges.filter(q => {
			if (!q.title || !q.subtitle || !q.solution) {
				return false;
			}
			if (q.choices.length < 2) return false;
			if (noRepeatTitle[q.title]) {
				rejectedTitles.push(q.title);
				return false;
			}
			if (noRepeatSubtitle[q.subtitle]) {
				rejectedTitles.push(q.subtitle);
				return false;
			}
			noRepeatTitle[q.title] = true;
			noRepeatSubtitle[q.subtitle] = true;
			if (!q.explanation) noExplanation++;
			return true;
		});
		if (verifiedQuestions.length > 0) {
			category.challenges = verifiedQuestions;
			return verified.concat(category);
		} else {
			rejectedCategories.push(category.title);
			return verified;
		}
	}, []);

	/* Log notes about any removed challenges/content: */
	if (rejectedCategories.length || noExplanation) console.warn('Take Note:');

	if (rejectedTitles.length) {
		console.log(`The following question titles are duplicates, titles must be ` +
			`unique: ${rejectedTitles.join(', ')}`
		);
	}

	if (rejectedCategories.length) {
		console.log(`The following quiz categories could not be added, ` +
			`probably because they are incomplete: ${rejectedCategories.join(', ')}`
		);
	}

	if (noExplanation) console.log(`${noExplanation} Questions have no explanation. ` +
		`Adding explanations will improve the learning experience.`);

	return verified;

})(challenges);
