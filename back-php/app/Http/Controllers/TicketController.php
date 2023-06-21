<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ticket;
use App\Entities\ResponseApi;

use Illuminate\Support\Facades\Validator;

class TicketController extends Controller
{
    public function index(Request $request){

        $responseApi = new ResponseApi;

        try {
            $data = Ticket::paginate(2);
            $responseApi->message = "Consulta exitosa";
            $responseApi->data=$data;
        } catch (\Exception $e) {
            $responseApi->message = "Se ha presentado un error al consultar los registros";
            $responseApi->success= false;
            $responseApi->errors = $e;
        }
        

        return response()->json($responseApi);
    }

    public function show($id){

        $responseApi = new ResponseApi;

        try {
            $data = Ticket::find($id);
            $responseApi->message = "Consulta exitosa";
            $responseApi->data=$data;
        } catch (\Exception $e) {
            $responseApi->message = "Se ha presentado un error al consultar el registro";
            $responseApi->success= false;
            $responseApi->errors = $e;
        }

        return response()->json($responseApi);
    }

    public function store(Request $request){

        $responseApi = new ResponseApi;

        $reglas = array('user' => 'required',
                        'status' => 'required|in:Abierto,Cerrado');

        $validacion = Validator::make($request->all(), $reglas);

        if($validacion->fails()){
            $responseApi->message = "Se ha presentado un error al guardar el registro";
            $responseApi->success= false;
            $responseApi->errors = $validacion->errors(); 
            return response()->json($responseApi);
        }

        try {
            $data = Ticket::create([
                'user'=>$request->user,
                'status'=>$request->status
            ]);
            $data->save();

            $responseApi->message = "El registro se guardo exitosamente";
            $responseApi->data=$data;
        } catch (\Exception $e) {
            $responseApi->message = "Se ha presentado un error al guardar el registro";
            $responseApi->success= false;
            $responseApi->errors = $e;
        }
        

        return response()->json($responseApi);
    }

    public function update($id, Request $request){

        $responseApi = new ResponseApi;

        $reglas = array('user' => 'required',
                        'status' => 'required|in:Abierto,Cerrado');

        $validacion = Validator::make($request->all(), $reglas);

        if($validacion->fails()){
            $responseApi->message = "Se ha presentado un error al guardar el registro";
            $responseApi->success= false;
            $responseApi->errors = $validacion->errors(); 
            return response()->json($responseApi);
        }

        try {
            $data= Ticket::find($id);

            if (!is_null($data)) {
                $data = $data->fill([
                    'user'=>$request->user,
                    'status'=>$request->status
                ]);
                $data->save();

                $responseApi->message = "El registro se actualizo exitosamente";
                $responseApi->data=$data;
            } else{
                $responseApi->message = "No se encontro el registro con ID ".$id;
                $responseApi->success= false;
            }
            

        } catch (\Exception $e) {
            $responseApi->message = "Se ha presentado un error al actualizar el registro";
            $responseApi->success= false;
            $responseApi->errors = $e;
        }

        return response()->json($responseApi);
    }

    public function destroy($id){

        $responseApi = new ResponseApi;

        try {
            $data= Ticket::find($id);
            if (!is_null($data)) {
                $data = Ticket::destroy($id);
                $responseApi->message = "Registro borrado exitosamente";
            } else{
                $responseApi->message = "No se encontro el registro con ID ".$id;
                $responseApi->success= false;
            }

        } catch (\Exception $e) {
            $responseApi->message = "Se ha presentado un error al borrar el registro";
            $responseApi->success= false;
            $responseApi->errors = $e;
        }

        return response()->json($responseApi);

    }
}
