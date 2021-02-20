(async function() {
	var i, j;

	function mathRandomInt(a, b) {
		if (a > b) {
			var c = a;
			a = b;
			b = c;
		}
		return Math.floor(Math.random() * (b - a + 1) + a);
	}
	world.say('');
	console.warn('');
	for (i = 1; i <= 2; i++) {
		await sleep(1000);
		console.clear();
		world.say(['倒计时', 3 - i, '！'].join(''));
		console.error((['倒计时', 3 - i, '！'].join('')));
	}
	await sleep(1000);
	console.clear();
	world.say('');
	console.warn('');
	for (j = 1; j <= 1000000000000; j++) {
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("air")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("air")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("air")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("leaf_01")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("leaf_02")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("dirt")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("grass")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("stone")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("green_leaf")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("snowland")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("ice")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("polar_ice")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("polar_region")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("rock")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("water")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("wooden_box")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("glass")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("board_01")));
		voxels.setVoxel((mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (mathRandomInt(0, 256)), (voxels.id("stainless_steel")));
		await sleep(1);
	}
	console.log('');
	world.say('');
})();
