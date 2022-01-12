class Api::DepartmentsController < ApplicationController

    def index
        @departments = Department.all
        render :index
    end

    def show
        @department = Department.find_by(department: params[:id])
        if @department
            render :show
        else
            render json: "Department is not found", status: 404
        end
    end

    private
    def department_params
        params.require(:department).permit(:department)
    end


end
