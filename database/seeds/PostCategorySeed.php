<?php

use App\PostCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class PostCategorySeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $allCategories=collect(["	All Recent Articles	"	,
            "	Press Releases	"	,
            "	Administrative Messages	"	,
            "	News Briefs	"	,
            "	All Academics	"	,
            "	Emergency Information	"	,
            "	Excellence in Space Sciences	"	,
            "	Leadership in Genomics	"	,
            "	UCSC in Silicon Valley	"	,
            "	Visionaries in Marine Sciences	"	,
            "	Interdisciplinary Study	"	,
            "	Experiential Learning	"	,
            "	Social Consciousness	"	,
            "	All Arts Division news	"	,
            "	Art Department	"	,
            "	Film and Digital Media	"	,
            "	History of Art and Visual Culture	"	,
            "	Music	"	,
            "	Theater Arts	"	,
            "	All Engineering news	"	,
            "	Applied Mathematics and Statistics	"	,
            "	Biomolecular Engineering	"	,
            "	Computer Engineering	"	,
            "	Computer Science	"	,
            "	Electrical Engineering	"	,
            "	Technology and Information Management	"	,
            "	All Humanities news	"	,
            "	American Studies	"	,
            "	Feminist Studies	"	,
            "	History	"	,
            "	History of Consciousness	"	,
            "	Jewish Studies	"	,
            "	Language Program	"	,
            "	Linguistics	"	,
            "	Literature	"	,
            "	Philosophy	"	,
            "	Writing Program	"	,
            "	All Physical and Biological Sciences news	"	,
            "	Astronomy and Astrophysics	"	,
            "	Chemistry and Biochemistry	"	,
            "	Earth Sciences	"	,
            "	Ecology and Evolutionary Biology	"	,
            "	Environmental Toxicology	"	,
            "	Mathematics	"	,
            "	Molecular, Cell, and Developmental Biology	"	,
            "	Ocean Sciences	"	,
            "	Physics	"	,
            "	Science Communication Program	"	,
            "	All Social Sciences news	"	,
            "	Anthropology	"	,
            "	Community Studies	"	,
            "	Economics	"	,
            "	Education	"	,
            "	Environmental Studies	"	,
            "	Latin American and Latino Studies	"	,
            "	Politics	"	,
            "	Psychology	"	,
            "	Sociology	"	,
            "	All Audience Areas	"	,
            "	Prospective Students	"	,
            "	Undergraduate Students	"	,
            "	Graduate Students	"	,
            "	Parents of Students	"	,
            "	International Community	"	,
            "	Alumni	"	,
            "	Donors	"	,
            "	Faculty	"	,
            "	Staff	"	,
            "	All Activities	"	,
            "	Administration	"	,
            "	Admissions	"	,
            "	Awards and Honors	"	,
            "	Events	"	,
            "	Gifts and Grants	"	,
            "	In Memoriam	"	,
            "	Library	"	,
            "	Research	"	,
            "	Sports	"	,
            "	Sustainability	"	,
            "	Donor News	"	,
            "	Student News	"	,
            "	Campus Updates	"	,])->map(function ($value,$index){
                PostCategory::create([
                    'name'=>$value,
                    'description'=>$value
                ]);
        });
    }
}
