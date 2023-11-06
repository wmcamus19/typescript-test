const direction: string = 'C';

const Direction = {
	A: 'A',
	B: 'B',
	C: 'C',
	D: 'D',
};

switch (direction) {
	case Direction.A:
		console.log(Direction.A);
		break;
	case Direction.B:
		console.log(Direction.B);
		break;
	case Direction.C:
		console.log(Direction.C);
		break;
	case Direction.D:
		console.log(Direction.D);
		break;
	default:
		console.log('No');
		break;
}

const grade: number = 100;

switch (true) {
	case grade >= 100:
		console.log('You are god.');
		break;
	case grade <= 100 && grade >= 90:
		console.log('You are prodigy.');
		break;
	case grade <= 90 && grade >= 80:
		console.log('You are genius.');
		break;
	case grade <= 80 && grade >= 70:
		console.log('You are smart.');
		break;
	case grade <= 60 && grade >= 50:
		console.log('You are normal.');
		break;
	default:
		console.log('You are weird.');
		break;
}
