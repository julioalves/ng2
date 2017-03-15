<?php

use App\News;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        for ($i=0;$i < 10;$i++)
        {
            News::create(
                [
                    "title"=> "noticia $i",
                    "description" => 'description $i',
                    "image" => 'image1',
                ]
            );

        }

    }
}
