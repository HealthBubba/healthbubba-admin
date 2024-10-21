<?php

namespace App\Library;

use Cloudinary\Cloudinary;
use Illuminate\Support\Str;

class Uploader {

    static function upload($files){
        try {
            if(!$files) return false;

            if(is_array($files)){
                $file_array = [];

                for($i=0; $i < count($files); $i++) {
                    $file = $files[$i];
                    if(env('STORAGE_LOCATION') === 'local' ){
                        $file_array[$i] = self::saveToStorage($file);
                    }else if (env('STORAGE_LOCATION') === 'cloud') {
                        $url = cloudinary()->upload($file->getRealPath())->getSecurePath();
                        $file_array[$i] = $url;
                    }
                }

                return json_encode($file_array);
            }

            if(env('STORAGE_LOCATION') === 'local'){
                $url = self::saveToStorage($files);
            }else if(env('STORAGE_LOCATION') === 'cloud'){
                $url = cloudinary()->upload($files->getRealPath())->getSecurePath();
            }

            return $url;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    static function saveToStorage($file){
        $ext = $file->getClientOriginalExtension();
        $imageName = Str::random().'.'.$ext;
        $file->move(public_path('/uploads/storage'), $imageName);
        return asset("/uploads/storage/{$imageName}");
    }

    static function updateFile($file, $oldFile){
        self::deleteFile($oldFile);
        return self::upload($file);
    }

    static function deleteFiles(array $files){
        foreach ($files as $file) {
            self::deleteFile($file);
        }
    }

    static function deleteFile($file){
        if ($file) {
            $cloudinary_id = self::extractFileId($file);
            cloudinary()->destroy($cloudinary_id);
        }
    }

    private static function extractFileId($file){
        $ext = pathinfo($file, PATHINFO_EXTENSION);
        return basename($file, $ext);
    }


}