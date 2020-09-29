<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PagesController extends Controller
{
	public function inicio(){
    	$indice = DB::table('historial')->select('IGE')->get();
    	$temp = DB::table('historial')->select('temp')->get();
    	return view ('Inicio', compact('indice'), compact('temp'));
    }

    public function buscador(Request $request){
    	$lugares = DB::table('municipio')->where('nombre','like',$request->buscar."%")->take(10)->get();
    	return view ('Inicio', compact('lugares'));
    }
}
