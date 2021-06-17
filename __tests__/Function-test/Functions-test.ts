import 'react-native';
import { getUniqueHash } from '../../src/utils/stringHashUtil';

it('return unique hash value', () => {

    let mockObject = 
                {
                    "definition":"a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.",
                    "emoji":"🦉",
                    "example":"I love reaching out into that absolute silence, when you can hear the owl or the wind.",
                    "image_url":"https://media.owlbot.info/dictionary/images/hhhhhhhhhhhhhhhhhhhu.jpg.400x400_q85_box-15,0,209,194_crop_detail.jpg",
                    "type":"noun",
                    "word":"owl"
                }

    var hashString =  getUniqueHash(mockObject);

    expect(hashString).toMatch("-829380587");
});
