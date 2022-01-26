define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Asian People', //Will appear in the data.
			title : {
				media : {word : 'Asian People'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: 'AME821.jpg'},
				{image: 'AME831.jpg'},
				{image: 'AME871.jpg'},
				{image: 'AFE811.jpg'},
				{image: 'AFE831.jpg'},
				{image: 'AFE851.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31b404','font-size':'1.8em'}
			
		},	
		category2 :	{
			name : 'White People', //Will appear in the data.
			title : {
				media : {word : 'White People'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: 'AME011.jpg'},
				{image: 'AME021.jpg'},
				{image: 'AME041.jpg'},
				{image: 'AFE021.jpg'},
				{image: 'AFE071.jpg'},
				{image: 'AFE081.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31b404','font-size':'1.8em'}
		},

		base_url : {//Where are your images at? 
		    //IMPORTANT: change this path or else your study will break when deployed.
			image : '/implicit/user/kschmidt/awiat/images/'
		} 
	});
	//NOTE: when you test the task, remember that pressing ESC and then ENTER skips blocks.
});


